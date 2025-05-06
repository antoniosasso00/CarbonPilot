from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend import crud
from backend.schemas.autoclave import AutoclaveCreate, AutoclaveRead, AutoclaveUpdate
from backend.database import get_db

router = APIRouter(prefix="/autoclaves", tags=["autoclaves"])


@router.get("/", response_model=List[AutoclaveRead])
def read_autoclaves(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.autoclaves.get_autoclaves(db, skip, limit)


@router.get("/{autoclave_id}", response_model=AutoclaveRead)
def read_autoclave(autoclave_id: int, db: Session = Depends(get_db)):
    autoclave = crud.autoclaves.get_autoclave(db, autoclave_id)
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave not found")
    return autoclave


@router.post("/", response_model=AutoclaveRead)
def create_autoclave(autoclave: AutoclaveCreate, db: Session = Depends(get_db)):
    return crud.autoclaves.create_autoclave(db, autoclave)


@router.put("/{autoclave_id}", response_model=AutoclaveRead)
def update_autoclave(autoclave_id: int, update: AutoclaveUpdate, db: Session = Depends(get_db)):
    autoclave = crud.autoclaves.update_autoclave(db, autoclave_id, update)
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave not found")
    return autoclave


@router.delete("/{autoclave_id}")
def delete_autoclave(autoclave_id: int, db: Session = Depends(get_db)):
    success = crud.autoclaves.delete_autoclave(db, autoclave_id)
    if not success:
        raise HTTPException(status_code=404, detail="Autoclave not found")
    return {"ok": True}
