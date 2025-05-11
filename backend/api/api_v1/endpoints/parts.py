from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from schemas.part import PartCreate, PartRead, PartUpdate
from repositories import part as crud

router = APIRouter()


@router.post("/", response_model=PartRead, status_code=201)
def create_part(data: PartCreate, db: Session = Depends(get_db)):
    existing = crud.get_part_by_number(db, data.part_number)
    if existing:
        raise HTTPException(status_code=400, detail="Part with this number already exists")
    return crud.create_part(db, data)


@router.get("/", response_model=List[PartRead])
def list_parts(db: Session = Depends(get_db)):
    return crud.get_all_parts(db)


@router.get("/{part_id}", response_model=PartRead)
def get_part(part_id: int, db: Session = Depends(get_db)):
    part = crud.get_part(db, part_id)
    if not part:
        raise HTTPException(status_code=404, detail="Part not found")
    return part


@router.put("/{part_id}", response_model=PartRead)
def update_part(part_id: int, updates: PartUpdate, db: Session = Depends(get_db)):
    updated = crud.update_part(db, part_id, updates)
    if not updated:
        raise HTTPException(status_code=404, detail="Part not found")
    return updated


@router.delete("/{part_id}", status_code=204)
def delete_part(part_id: int, db: Session = Depends(get_db)):
    if not crud.delete_part(db, part_id):
        raise HTTPException(status_code=404, detail="Part not found") 