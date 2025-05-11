import logging
from sqlalchemy.orm import Session
from models.nesting import NestingResult
from models.part import Part
from models.autoclave import Autoclave
from utils.nesting_model import NestingModel, validate_valves_capacity
from datetime import datetime

logger = logging.getLogger(__name__)

def execute_nesting(db: Session, part_ids: list[int], autoclave_id: int) -> NestingResult:
    parts = db.query(Part).filter(Part.id.in_(part_ids)).all()
    autoclave = db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()

    if not parts:
        raise ValueError("Nessuna parte trovata con gli ID forniti.")
    if not autoclave:
        raise ValueError("Autoclave non trovata.")

    if not validate_valves_capacity([p.__dict__ for p in parts], autoclave.num_vacuum_lines):
        raise ValueError("Superato il limite massimo di valvole dell'autoclave.")

    model = NestingModel(autoclave.width, autoclave.height, [p.__dict__ for p in parts])
    layout = model.solve()

    if not layout:
        raise ValueError("Nessuna soluzione valida trovata per il nesting.")

    result = NestingResult(
        autoclave_id=autoclave.id,
        layout_image_path="layout_placeholder.png",  # 🔧 da generare in futuro
        created_at=datetime.utcnow()
    )
    db.add(result)
    db.commit()
    db.refresh(result)

    logger.info(f"Nesting creato con ID {result.id} per autoclave {autoclave.name}")
    return result


def generate_nesting_report(db: Session, layout_id: int) -> bytes:
    result = db.query(NestingResult).filter(NestingResult.id == layout_id).first()
    if not result:
        raise ValueError("Layout non trovato.")

    # 🔧 simulazione PDF: in produzione si genera da layout_image_path
    pdf_content = f"NESTING LAYOUT REPORT - ID {layout_id}".encode("utf-8")
    logger.info(f"Generato PDF nesting per layout {layout_id}")
    return pdf_content
