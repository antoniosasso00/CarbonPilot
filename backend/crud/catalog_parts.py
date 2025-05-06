from sqlalchemy.orm import Session
from typing import List, Optional
from backend.models.catalog_part import CatalogPart
from backend.schemas.catalog_part import CatalogPartCreate, CatalogPartUpdate


def get_catalog_part(db: Session, catalog_part_id: int) -> Optional[CatalogPart]:
    return db.query(CatalogPart).filter(CatalogPart.id == catalog_part_id).first()


def get_catalog_parts(db: Session, skip: int = 0, limit: int = 100) -> List[CatalogPart]:
    return db.query(CatalogPart).offset(skip).limit(limit).all()


def create_catalog_part(db: Session, catalog_part: CatalogPartCreate) -> CatalogPart:
    db_part = CatalogPart(**catalog_part.dict())
    db.add(db_part)
    db.commit()
    db.refresh(db_part)
    return db_part


def update_catalog_part(db: Session, catalog_part_id: int, update: CatalogPartUpdate) -> Optional[CatalogPart]:
    db_part = get_catalog_part(db, catalog_part_id)
    if not db_part:
        return None
    for key, value in update.dict(exclude_unset=True).items():
        setattr(db_part, key, value)
    db.commit()
    db.refresh(db_part)
    return db_part


def delete_catalog_part(db: Session, catalog_part_id: int) -> bool:
    db_part = get_catalog_part(db, catalog_part_id)
    if not db_part:
        return False
    db.delete(db_part)
    db.commit()
    return True
