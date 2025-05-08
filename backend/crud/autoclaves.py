from sqlalchemy.orm import Session
from typing import List, Optional
from models.autoclave import Autoclave
from schemas.autoclave import AutoclaveCreate, AutoclaveUpdate


def get_autoclave(db: Session, autoclave_id: int) -> Optional[Autoclave]:
    return db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()


def get_autoclaves(db: Session, skip: int = 0, limit: int = 100) -> List[Autoclave]:
    return db.query(Autoclave).offset(skip).limit(limit).all()


def create_autoclave(db: Session, autoclave: AutoclaveCreate) -> Autoclave:
    db_autoclave = Autoclave(**autoclave.dict())
    db.add(db_autoclave)
    db.commit()
    db.refresh(db_autoclave)
    return db_autoclave


def update_autoclave(db: Session, autoclave_id: int, update: AutoclaveUpdate) -> Optional[Autoclave]:
    db_autoclave = get_autoclave(db, autoclave_id)
    if not db_autoclave:
        return None
    for key, value in update.dict(exclude_unset=True).items():
        setattr(db_autoclave, key, value)
    db.commit()
    db.refresh(db_autoclave)
    return db_autoclave


def delete_autoclave(db: Session, autoclave_id: int) -> bool:
    db_autoclave = get_autoclave(db, autoclave_id)
    if not db_autoclave:
        return False
    db.delete(db_autoclave)
    db.commit()
    return True
