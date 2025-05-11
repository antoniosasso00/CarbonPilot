from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
from schemas.autoclave import AutoclaveCreate, AutoclaveRead, AutoclaveUpdate
from repositories import autoclave as crud

router = APIRouter(prefix="/autoclaves", tags=["Autoclaves"])


@router.post("/", response_model=AutoclaveRead, status_code=201)
def create_autoclave(data: AutoclaveCreate, db: Session = Depends(get_db)):
    existing = crud.get_autoclave_by_name(db, data.name)
    if existing:
        raise HTTPException(status_code=400, detail="Autoclave with this name already exists")
    return crud.create_autoclave(db, data)


@router.get("/", response_model=List[AutoclaveRead])
def list_autoclaves(db: Session = Depends(get_db)):
    return crud.get_all_autoclaves(db)


@router.get("/{autoclave_id}", response_model=AutoclaveRead)
def get_autoclave(autoclave_id: int, db: Session = Depends(get_db)):
    autoclave = crud.get_autoclave(db, autoclave_id)
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave not found")
    return autoclave


@router.put("/{autoclave_id}", response_model=AutoclaveRead)
def update_autoclave(autoclave_id: int, updates: AutoclaveUpdate, db: Session = Depends(get_db)):
    updated = crud.update_autoclave(db, autoclave_id, updates)
    if not updated:
        raise HTTPException(status_code=404, detail="Autoclave not found")
    return updated
