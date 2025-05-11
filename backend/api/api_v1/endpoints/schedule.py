from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime

from db.session import get_db
from models.schedule import Schedule
from models.part import Part
from models.autoclave import Autoclave
from models.nesting_result import NestingResult
from schemas.schedule import ScheduleCreate, ScheduleUpdate, ScheduleResponse

router = APIRouter()

@router.get("/", response_model=List[ScheduleResponse])
def get_schedules(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    start_date: datetime = None,
    end_date: datetime = None
):
    """Recupera tutte le pianificazioni, opzionalmente filtrate per data"""
    query = db.query(Schedule)
    
    if start_date:
        query = query.filter(Schedule.start_date >= start_date)
    if end_date:
        query = query.filter(Schedule.end_date <= end_date)
        
    return query.offset(skip).limit(limit).all()

@router.post("/", response_model=ScheduleResponse)
def create_schedule(schedule: ScheduleCreate, db: Session = Depends(get_db)):
    """Crea una nuova pianificazione"""
    # Verifica che la parte esista
    part = db.query(Part).filter(Part.id == schedule.part_id).first()
    if not part:
        raise HTTPException(status_code=404, detail="Parte non trovata")
        
    # Verifica che l'autoclave esista
    autoclave = db.query(Autoclave).filter(Autoclave.id == schedule.autoclave_id).first()
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")
        
    # Verifica che il layout esista (se specificato)
    if schedule.layout_id:
        layout = db.query(NestingResult).filter(NestingResult.id == schedule.layout_id).first()
        if not layout:
            raise HTTPException(status_code=404, detail="Layout non trovato")
    
    # Verifica sovrapposizioni
    overlapping = db.query(Schedule).filter(
        Schedule.autoclave_id == schedule.autoclave_id,
        Schedule.start_date < schedule.end_date,
        Schedule.end_date > schedule.start_date
    ).first()
    
    if overlapping:
        raise HTTPException(
            status_code=400,
            detail="Esiste già una pianificazione per questa autoclave in questo intervallo temporale"
        )
    
    # Crea la schedule
    db_schedule = Schedule(**schedule.dict())
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule

@router.get("/{schedule_id}", response_model=ScheduleResponse)
def get_schedule(schedule_id: int, db: Session = Depends(get_db)):
    """Recupera una specifica pianificazione per ID"""
    schedule = db.query(Schedule).filter(Schedule.id == schedule_id).first()
    if not schedule:
        raise HTTPException(status_code=404, detail="Pianificazione non trovata")
    return schedule

@router.put("/{schedule_id}", response_model=ScheduleResponse)
def update_schedule(schedule_id: int, schedule: ScheduleUpdate, db: Session = Depends(get_db)):
    """Aggiorna una pianificazione esistente"""
    db_schedule = db.query(Schedule).filter(Schedule.id == schedule_id).first()
    if not db_schedule:
        raise HTTPException(status_code=404, detail="Pianificazione non trovata")
    
    # Verifica sovrapposizioni solo se le date vengono modificate
    if schedule.start_date or schedule.end_date:
        start_date = schedule.start_date or db_schedule.start_date
        end_date = schedule.end_date or db_schedule.end_date
        
        overlapping = db.query(Schedule).filter(
            Schedule.id != schedule_id,
            Schedule.autoclave_id == db_schedule.autoclave_id,
            Schedule.start_date < end_date,
            Schedule.end_date > start_date
        ).first()
        
        if overlapping:
            raise HTTPException(
                status_code=400,
                detail="La modifica causerebbe una sovrapposizione con un'altra pianificazione"
            )
    
    # Aggiorna i campi
    for field, value in schedule.dict(exclude_unset=True).items():
        setattr(db_schedule, field, value)
    
    db.commit()
    db.refresh(db_schedule)
    return db_schedule

@router.delete("/{schedule_id}")
def delete_schedule(schedule_id: int, db: Session = Depends(get_db)):
    """Elimina una pianificazione"""
    db_schedule = db.query(Schedule).filter(Schedule.id == schedule_id).first()
    if not db_schedule:
        raise HTTPException(status_code=404, detail="Pianificazione non trovata")
    
    db.delete(db_schedule)
    db.commit()
    return {"message": "Pianificazione eliminata con successo"}
