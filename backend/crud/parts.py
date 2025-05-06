from sqlalchemy.orm import Session
from typing import List, Optional
from backend.models.part import Part, PartStatus
from backend.schemas.part import PartCreate, PartUpdate


def get_part(db: Session, part_id: int) -> Optional[Part]:
    return db.query(Part).filter(Part.id == part_id).first()


def get_parts(db: Session, skip: int = 0, limit: int = 100) -> List[Part]:
    return db.query(Part).offset(skip).limit(limit).all()


def create_part(db: Session, part: PartCreate) -> Part:
    db_part = Part(**part.dict())
    db.add(db_part)
    db.commit()
    db.refresh(db_part)
    return db_part


def update_part(db: Session, part_id: int, part_update: PartUpdate) -> Optional[Part]:
    db_part = get_part(db, part_id)
    if not db_part:
        return None
    for key, value in part_update.dict(exclude_unset=True).items():
        setattr(db_part, key, value)
    db.commit()
    db.refresh(db_part)
    return db_part


def delete_part(db: Session, part_id: int) -> bool:
    db_part = get_part(db, part_id)
    if not db_part:
        return False
    db.delete(db_part)
    db.commit()
    return True
