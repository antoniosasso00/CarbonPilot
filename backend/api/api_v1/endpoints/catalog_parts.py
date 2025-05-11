from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from db.session import get_db
from models.catalog_part import CatalogPart
from schemas.catalog_part import CatalogPartCreate, CatalogPartUpdate, CatalogPartResponse

router = APIRouter()

@router.get("/", response_model=List[CatalogPartResponse])
def get_catalog_parts(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    """Recupera tutte le parti del catalogo"""
    return db.query(CatalogPart).offset(skip).limit(limit).all()

@router.post("/", response_model=CatalogPartResponse)
def create_catalog_part(catalog_part: CatalogPartCreate, db: Session = Depends(get_db)):
    """Crea una nuova parte nel catalogo"""
    db_catalog_part = CatalogPart(**catalog_part.dict())
    db.add(db_catalog_part)
    db.commit()
    db.refresh(db_catalog_part)
    return db_catalog_part

@router.get("/{catalog_part_id}", response_model=CatalogPartResponse)
def get_catalog_part(catalog_part_id: int, db: Session = Depends(get_db)):
    """Recupera una specifica parte del catalogo per ID"""
    db_catalog_part = db.query(CatalogPart).filter(CatalogPart.id == catalog_part_id).first()
    if db_catalog_part is None:
        raise HTTPException(status_code=404, detail="Parte del catalogo non trovata")
    return db_catalog_part

@router.put("/{catalog_part_id}", response_model=CatalogPartResponse)
def update_catalog_part(catalog_part_id: int, catalog_part: CatalogPartUpdate, db: Session = Depends(get_db)):
    """Aggiorna una parte del catalogo esistente"""
    db_catalog_part = db.query(CatalogPart).filter(CatalogPart.id == catalog_part_id).first()
    if db_catalog_part is None:
        raise HTTPException(status_code=404, detail="Parte del catalogo non trovata")
    
    for field, value in catalog_part.dict(exclude_unset=True).items():
        setattr(db_catalog_part, field, value)
    
    db.commit()
    db.refresh(db_catalog_part)
    return db_catalog_part

@router.delete("/{catalog_part_id}")
def delete_catalog_part(catalog_part_id: int, db: Session = Depends(get_db)):
    """Elimina una parte del catalogo"""
    db_catalog_part = db.query(CatalogPart).filter(CatalogPart.id == catalog_part_id).first()
    if db_catalog_part is None:
        raise HTTPException(status_code=404, detail="Parte del catalogo non trovata")
    
    db.delete(db_catalog_part)
    db.commit()
    return {"message": "Parte del catalogo eliminata con successo"} 