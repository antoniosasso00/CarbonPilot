from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from backend.database import get_db
from backend import crud
from backend.schemas.schedule import ScheduleCreate, ScheduleRead, ScheduleUpdate

router = APIRouter(prefix="/schedules", tags=["schedules"])


@router.get("/", response_model=List[ScheduleRead])
def read_schedules(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.schedules.get_schedules(db, skip=skip, limit=limit)


@router.get("/{schedule_id}", response_model=ScheduleRead)
def read_schedule(schedule_id: int, db: Session = Depends(get_db)):
    schedule = crud.schedules.get_schedule(db, schedule_id)
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return schedule


@router.post("/", response_model=ScheduleRead)
def create_schedule(schedule: ScheduleCreate, db: Session = Depends(get_db)):
    return crud.schedules.create_schedule(db, schedule)


@router.put("/{schedule_id}", response_model=ScheduleRead)
def update_schedule(schedule_id: int, update: ScheduleUpdate, db: Session = Depends(get_db)):
    updated = crud.schedules.update_schedule(db, schedule_id, update)
    if not updated:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return updated


@router.delete("/{schedule_id}")
def delete_schedule(schedule_id: int, db: Session = Depends(get_db)):
    success = crud.schedules.delete_schedule(db, schedule_id)
    if not success:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return {"ok": True}

