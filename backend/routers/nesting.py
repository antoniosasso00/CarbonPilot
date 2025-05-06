from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.database import get_db
from backend.models.part import Part
from backend.models.autoclave import Autoclave
from backend.services.nesting import NestingModel

router = APIRouter(prefix="/nesting", tags=["nesting"])


@router.post("/")
def generate_nesting(part_ids: List[int], autoclave_id: int, db: Session = Depends(get_db)):
    parts = db.query(Part).filter(Part.id.in_(part_ids)).all()
    autoclave = db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()

    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")

    if not parts:
        raise HTTPException(status_code=404, detail="Parti non trovate")

    parts_data = [
        {
            "id": part.id,
            "width": part.width,
            "height": part.height
        }
        for part in parts
        if part.width <= autoclave.width and part.height <= autoclave.height
    ]

    model = NestingModel(autoclave.width, autoclave.height, parts_data)
    layout = model.solve()

    if not layout:
        raise HTTPException(status_code=400, detail="Nessuna soluzione trovata")

    return layout
