from fastapi import APIRouter, Depends, HTTPException, Body
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from typing import List
import io

from database import get_db
from models.part import Part
from models.autoclave import Autoclave
from services.nesting import NestingModel
from services.pdf_report import generate_nesting_pdf

router = APIRouter(prefix="/nesting", tags=["nesting"])


@router.post("/")
def generate_nesting(part_ids: List[int], autoclave_id: int, db: Session = Depends(get_db)):
    parts = db.query(Part).filter(Part.id.in_(part_ids)).all()
    autoclave = db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()

    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")

    if not parts:
        raise HTTPException(status_code=404, detail="Parti non trovate")

    valid_parts = [p for p in parts if p.width <= autoclave.width and p.height <= autoclave.height]
    if not valid_parts:
        raise HTTPException(status_code=400, detail="Nessuna parte compatibile con l'autoclave")

    parts_data = [{"id": p.id, "width": p.width, "height": p.height} for p in valid_parts]
    model = NestingModel(autoclave.width, autoclave.height, parts_data)
    layout = model.solve()

    if not layout:
        raise HTTPException(status_code=400, detail="Nessuna soluzione trovata")

    return {
        "layout_id": f"{autoclave.id}-{model.timestamp}",
        "autoclave_id": autoclave.id,
        "width_used": model.width_used,
        "height_used": model.height_used,
        "timestamp": model.timestamp,
        "parts": [
            {
                "id": part["id"],
                "part_number": next((p.part_number for p in valid_parts if p.id == part["id"]), ""),
                "x": part["x"],
                "y": part["y"],
                "rotated": part["rotated"]
            }
            for part in layout
        ]
    }


@router.post("/report")
def nesting_pdf(layout_data: dict = Body(...)):
    try:
        pdf_bytes = generate_nesting_pdf(layout_data)
        return StreamingResponse(
            io.BytesIO(pdf_bytes),
            media_type="application/pdf",
            headers={"Content-Disposition": f"attachment; filename=nesting_{layout_data.get('layout_id', 'report')}.pdf"}
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Errore nella generazione del PDF: {str(e)}")
