from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models.schedule import Schedule
from schemas.schedule import ScheduleRead
from repositories import schedule as crud

router = APIRouter(prefix="/schedules", tags=["Schedules"])


@router.get("/{schedule_id}", response_model=ScheduleRead)
def get_schedule(schedule_id: int, db: Session = Depends(get_db)):
    schedule = crud.get_schedule(db, schedule_id)
    if not schedule:
        raise HTTPException(status_code=404, detail="Schedule not found")
    return schedule
