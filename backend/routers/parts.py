from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from backend import crud
from backend.schemas.part import PartCreate, PartRead, PartUpdate
from backend.database import get_db
from backend.models.part import Part

router = APIRouter(prefix="/parts", tags=["parts"])


@router.get("/", response_model=List[PartRead])
def read_parts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.parts.get_parts(db, skip=skip, limit=limit)


@router.get("/{part_id}", response_model=PartRead)
def read_part(part_id: int, db: Session = Depends(get_db)):
    part = crud.parts.get_part(db, part_id)
    if not part:
        raise HTTPException(status_code=404, detail="Part not found")
    return part


@router.post("/", response_model=PartRead)
def create_part(part: PartCreate, db: Session = Depends(get_db)):
    return crud.parts.create_part(db, part)


@router.put("/{part_id}", response_model=PartRead)
def update_part(part_id: int, part_update: PartUpdate, db: Session = Depends(get_db)):
    part = crud.parts.update_part(db, part_id, part_update)
    if not part:
        raise HTTPException(status_code=404, detail="Part not found")
    return part


@router.delete("/{part_id}")
def delete_part(part_id: int, db: Session = Depends(get_db)):
    success = crud.parts.delete_part(db, part_id)
    if not success:
        raise HTTPException(status_code=404, detail="Part not found")
    return {"ok": True}
