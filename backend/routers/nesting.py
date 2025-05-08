from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from models.part import Part
from models.autoclave import Autoclave
from services.nesting import NestingModel

router = APIRouter(prefix="/nesting", tags=["nesting"])


@router.post("/")
def generate_nesting(part_ids: List[int], autoclave_id: int, db: Session = Depends(get_db)):
    parts = db.query(Part).filter(Part.id.in_(part_ids)).all()
    autoclave = db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()

    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")

    if not parts:
        raise HTTPException(status_code=404, detail="Parti non trovate")

    # Solo parti che entrano in autoclave
    valid_parts = [p for p in parts if p.width <= autoclave.width and p.height <= autoclave.height]
    if not valid_parts:
        raise HTTPException(status_code=400, detail="Nessuna parte compatibile con l'autoclave")

    parts_data = [
        {"id": p.id, "width": p.width, "height": p.height}
        for p in valid_parts
    ]

    model = NestingModel(autoclave.width, autoclave.height, parts_data)
    layout = model.solve()

    if not layout:
        raise HTTPException(status_code=400, detail="Nessuna soluzione trovata")

    # Ricostruzione dati completi per frontend e PDF
    layout_result = {
        "layout_id": f"{autoclave.id}-{model.timestamp}",
        "autoclave_id": autoclave.id,
        "width_used": model.width_used,
        "height_used": model.height_used,
        "timestamp": model.timestamp,
        "parts": []
    }

    for part in layout:
        part_obj = next((p for p in valid_parts if p.id == part["id"]), None)
        if part_obj:
            layout_result["parts"].append({
                "id": part_obj.id,
                "part_number": part_obj.part_number,
                "x": part["x"],
                "y": part["y"],
                "rotated": part["rotated"]
            })

    return layout_result
