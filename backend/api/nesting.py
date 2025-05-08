from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from ortools.packaging import pywrapcp
from db import models, session

router = APIRouter()

# 🔧 Layout temporanei (in memoria, finché non si usa il DB)
fake_layouts = []

# 📥 Modello richiesta nesting
class NestingRequest(BaseModel):
    part_ids: list[int]
    autoclave_id: int

# 📤 Modello risposta layout (semplificato)
class NestingResult(BaseModel):
    layout_id: int
    placements: list[dict]  # es: [{part_id, x, y, width, height}]

# ▶️ POST /nesting → genera nuovo layout
@router.post("/nesting", response_model=NestingResult)
def run_nesting(request: NestingRequest):
    db = session()

    parts = db.query(models.Part).filter(models.Part.id.in_(request.part_ids)).all()
    autoclave = db.query(models.Autoclave).get(request.autoclave_id)

    if not parts or not autoclave:
        raise HTTPException(status_code=400, detail="Autoclave o parti non trovate")

    rectangles = [(p.width_mm, p.height_mm) for p in parts]
    ids = [p.id for p in parts]
    autoclave_width = autoclave.width_mm
    autoclave_height = autoclave.height_mm

    solver = pywrapcp.Solver("nesting")
    x = [solver.IntVar(0, autoclave_width, f"x{i}") for i in range(len(parts))]
    y = [solver.IntVar(0, autoclave_height, f"y{i}") for i in range(len(parts))]

    for i in range(len(parts)):
        for j in range(i + 1, len(parts)):
            no_overlap = solver.IsGreaterOrEqualCstVar(x[i] + rectangles[i][0], x[j]) | \
                         solver.IsGreaterOrEqualCstVar(x[j] + rectangles[j][0], x[i]) | \
                         solver.IsGreaterOrEqualCstVar(y[i] + rectangles[i][1], y[j]) | \
                         solver.IsGreaterOrEqualCstVar(y[j] + rectangles[j][1], y[i])
            solver.Add(no_overlap == 1)

    db.close()

    decision_builder = solver.Phase(x + y, solver.CHOOSE_FIRST_UNBOUND, solver.ASSIGN_MIN_VALUE)
    solver.NewSearch(decision_builder)

    if not solver.NextSolution():
        raise HTTPException(status_code=400, detail="Nesting non riuscito")

    placements = []
    for i in range(len(parts)):
        placements.append({
            "part_id": ids[i],
            "x": x[i].Value(),
            "y": y[i].Value(),
            "width": rectangles[i][0],
            "height": rectangles[i][1],
        })

    solver.EndSearch()

    result = NestingResult(layout_id=len(fake_layouts) + 1, placements=placements)
    fake_layouts.append(result)

    return result

# 📤 GET /nesting → restituisce tutti i layout temporanei
@router.get("/nesting", response_model=list[NestingResult])
def get_nesting_results():
    return JSONResponse(content=[layout.dict() for layout in fake_layouts])
