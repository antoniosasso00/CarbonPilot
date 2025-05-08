from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ortools.packaging import pywrapcp
from db import models, session
from sqlalchemy.orm import joinedload

router = APIRouter()

class NestingRequest(BaseModel):
    part_ids: list[int]
    autoclave_id: int

class NestingPlacementResponse(BaseModel):
    id: int
    part_number: str
    x: float
    y: float
    width: float
    height: float
    rotated: bool

class NestingResult(BaseModel):
    layout_id: int
    autoclave_id: int
    part_ids: list[int]
    width_used: float
    height_used: float
    parts: list[NestingPlacementResponse]
    created_at: str

@router.post("/nesting", response_model=NestingResult)
def run_nesting(request: NestingRequest):
    db = session()

    parts = db.query(models.Part).filter(models.Part.id.in_(request.part_ids)).all()
    autoclave = db.query(models.Autoclave).get(request.autoclave_id)

    if not parts or not autoclave:
        raise HTTPException(status_code=400, detail="Autoclave o parti non trovate")

    rectangles = [(p.width_mm, p.height_mm) for p in parts]
    ids = [p.id for p in parts]

    solver = pywrapcp.Solver("nesting")
    x = [solver.IntVar(0, autoclave.width_mm, f"x{i}") for i in range(len(parts))]
    y = [solver.IntVar(0, autoclave.height_mm, f"y{i}") for i in range(len(parts))]

    for i in range(len(parts)):
        for j in range(i + 1, len(parts)):
            no_overlap = solver.IsGreaterOrEqualCstVar(x[i] + rectangles[i][0], x[j]) | \
                         solver.IsGreaterOrEqualCstVar(x[j] + rectangles[j][0], x[i]) | \
                         solver.IsGreaterOrEqualCstVar(y[i] + rectangles[i][1], y[j]) | \
                         solver.IsGreaterOrEqualCstVar(y[j] + rectangles[j][1], y[i])
            solver.Add(no_overlap == 1)

    decision_builder = solver.Phase(x + y, solver.CHOOSE_FIRST_UNBOUND, solver.ASSIGN_MIN_VALUE)
    solver.NewSearch(decision_builder)

    if not solver.NextSolution():
        raise HTTPException(status_code=400, detail="Nesting non riuscito")

    # ✅ Creazione del layout e salvataggio
    layout = models.NestingLayout(autoclave_id=autoclave.id)
    db.add(layout)
    db.commit()
    db.refresh(layout)

    placements = []
    for i in range(len(parts)):
        placement = models.NestingPlacement(
            layout_id=layout.id,
            part_id=ids[i],
            x=x[i].Value(),
            y=y[i].Value(),
            width=rectangles[i][0],
            height=rectangles[i][1],
            rotated=False  # rotazioni non supportate per ora
        )
        placements.append(placement)
        db.add(placement)

    db.commit()

    # ✅ Costruzione della risposta con join Part
    db.refresh(layout)
    full_layout = (
        db.query(models.NestingLayout)
        .options(joinedload(models.NestingLayout.placements).joinedload(models.NestingPlacement.part))
        .filter(models.NestingLayout.id == layout.id)
        .first()
    )

    return NestingResult(
        layout_id=full_layout.id,
        autoclave_id=full_layout.autoclave_id,
        part_ids=[p.part_id for p in full_layout.placements],
        width_used=autoclave.width_mm,
        height_used=autoclave.height_mm,
        created_at=full_layout.created_at.isoformat(),
        parts=[
            NestingPlacementResponse(
                id=p.id,
                part_number=p.part.part_number,
                x=p.x,
                y=p.y,
                width=p.width,
                height=p.height,
                rotated=p.rotated
            )
            for p in full_layout.placements
        ]
    )
