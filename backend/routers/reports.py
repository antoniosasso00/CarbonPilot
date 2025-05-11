from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from typing import List
from io import BytesIO

from database import get_db
from models.autoclave import Autoclave
from models.part import Part
from services.nesting import NestingModel
from services.pdf_report import generate_nesting_pdf

router = APIRouter(prefix="/reports", tags=["reports"])


@router.post("/nesting/pdf")
def generate_nesting_report(part_ids: List[int], autoclave_id: int, db: Session = Depends(get_db)):
    autoclave = db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")

    parts = db.query(Part).filter(Part.id.in_(part_ids)).all()
    if not parts:
        raise HTTPException(status_code=404, detail="Parti non trovate")

    parts_data = [
        {"id": p.id, "width": p.width, "height": p.height}
        for p in parts if p.width <= autoclave.width and p.height <= autoclave.height
    ]

    model = NestingModel(autoclave.width, autoclave.height, parts_data)
    layout = model.solve()

    if not layout:
        raise HTTPException(status_code=400, detail="Nessun layout valido trovato")

    pdf_bytes = generate_nesting_pdf(autoclave.name, layout)
    return StreamingResponse(BytesIO(pdf_bytes), media_type="application/pdf", headers={
        "Content-Disposition": "inline; filename=nesting_report.pdf"
    })
