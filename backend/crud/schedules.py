from sqlalchemy.orm import Session
from typing import List, Optional
from backend.models.schedule import Schedule
from backend.models.part import Part
from backend.schemas.schedule import ScheduleCreate, ScheduleUpdate


def get_schedule(db: Session, schedule_id: int) -> Optional[Schedule]:
    return db.query(Schedule).filter(Schedule.id == schedule_id).first()


def get_schedules(db: Session, skip: int = 0, limit: int = 100) -> List[Schedule]:
    return db.query(Schedule).offset(skip).limit(limit).all()


def create_schedule(db: Session, data: ScheduleCreate) -> Schedule:
    parts = db.query(Part).filter(Part.id.in_(data.part_ids)).all()
    schedule = Schedule(
        autoclave_id=data.autoclave_id,
        description=data.description,
        start_time=data.start_time,
        end_time=data.end_time,
        parts=parts
    )
    db.add(schedule)
    db.commit()
    db.refresh(schedule)
    return schedule


def update_schedule(db: Session, schedule_id: int, data: ScheduleUpdate) -> Optional[Schedule]:
    schedule = get_schedule(db, schedule_id)
    if not schedule:
        return None

    if data.description is not None:
        schedule.description = data.description
    if data.start_time is not None:
        schedule.start_time = data.start_time
    if data.end_time is not None:
        schedule.end_time = data.end_time
    if data.part_ids is not None:
        parts = db.query(Part).filter(Part.id.in_(data.part_ids)).all()
        schedule.parts = parts

    db.commit()
    db.refresh(schedule)
    return schedule


def delete_schedule(db: Session, schedule_id: int) -> bool:
    schedule = get_schedule(db, schedule_id)
    if not schedule:
        return False
    db.delete(schedule)
    db.commit()
    return True
