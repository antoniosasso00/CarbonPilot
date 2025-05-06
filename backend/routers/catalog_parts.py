from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend import crud
from backend.schemas.catalog_part import CatalogPartCreate, CatalogPartRead, CatalogPartUpdate
from backend.database import get_db

router = APIRouter(prefix="/catalog", tags=["catalog_parts"])


@router.get("/", response_model=List[CatalogPartRead])
def read_catalog_parts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.catalog_parts.get_catalog_parts(db, skip, limit)


@router.get("/{catalog_part_id}", response_model=CatalogPartRead)
def read_catalog_part(catalog_part_id: int, db: Session = Depends(get_db)):
    part = crud.catalog_parts.get_catalog_part(db, catalog_part_id)
    if not part:
        raise HTTPException(status_code=404, detail="Catalog part not found")
    return part


@router.post("/", response_model=CatalogPartRead)
def create_catalog_part(part: CatalogPartCreate, db: Session = Depends(get_db)):
    return crud.catalog_parts.create_catalog_part(db, part)


@router.put("/{catalog_part_id}", response_model=CatalogPartRead)
def update_catalog_part(catalog_part_id: int, update: CatalogPartUpdate, db: Session = Depends(get_db)):
    part = crud.catalog_parts.update_catalog_part(db, catalog_part_id, update)
    if not part:
        raise HTTPException(status_code=404, detail="Catalog part not found")
    return part


@router.delete("/{catalog_part_id}")
def delete_catalog_part(catalog_part_id: int, db: Session = Depends(get_db)):
    success = crud.catalog_parts.delete_catalog_part(db, catalog_part_id)
    if not success:
        raise HTTPException(status_code=404, detail="Catalog part not found")
    return {"ok": True}
