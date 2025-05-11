from sqlalchemy.orm import Session
from models.part import Part
from schemas.part import PartCreate, PartUpdate


def get_part(db: Session, part_id: int) -> Part | None:
    """Restituisce una parte dato il suo ID."""
    return db.query(Part).filter(Part.id == part_id).first()


def get_part_by_number(db: Session, part_number: str) -> Part | None:
    """Restituisce una parte dato il suo numero."""
    return db.query(Part).filter(Part.part_number == part_number).first()


def get_all_parts(db: Session) -> list[Part]:
    """Restituisce tutte le parti."""
    return db.query(Part).all()


def create_part(db: Session, part: PartCreate) -> Part:
    """Crea una nuova parte."""
    db_part = Part(**part.dict())
    db.add(db_part)
    db.commit()
    db.refresh(db_part)
    return db_part


def update_part(db: Session, part_id: int, updates: PartUpdate) -> Part | None:
    """Aggiorna una parte esistente."""
    db_part = get_part(db, part_id)
    if not db_part:
        return None

    for field, value in updates.dict(exclude_unset=True).items():
        setattr(db_part, field, value)

    db.commit()
    db.refresh(db_part)
    return db_part


def delete_part(db: Session, part_id: int) -> bool:
    """Elimina una parte."""
    db_part = get_part(db, part_id)
    if not db_part:
        return False

    db.delete(db_part)
    db.commit()
    return True 