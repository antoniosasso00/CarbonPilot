from sqlalchemy.orm import Session, joinedload
from datetime import timedelta

from models.schedule import Schedule
from models.part import Part
from models.cure_cycle import CureCycle
from schemas.schedule import ScheduleCreate, ScheduleUpdate


def get_schedule(db: Session, schedule_id: int) -> Schedule | None:
    return db.query(Schedule)\
        .options(joinedload(Schedule.parts))\
        .filter(Schedule.id == schedule_id)\
        .first()


def get_all_schedules(db: Session) -> list[Schedule]:
    return db.query(Schedule).all()


def create_schedule(db: Session, schedule: ScheduleCreate) -> Schedule:
    parts = db.query(Part).filter(Part.id.in_(schedule.part_ids)).all()
    if not parts:
        raise ValueError("Nessuna parte valida trovata per lo schedule")

    max_total_duration = 0
    for part in parts:
        lam_time = part.lamination_time or 0
        cycle = db.query(CureCycle).filter(CureCycle.code == part.cycle_code).first()
        if not cycle:
            raise ValueError(f"Ciclo non trovato per la parte {part.part_number}")
        total_time = lam_time + cycle.duration_min
        if total_time > max_total_duration:
            max_total_duration = total_time

    end_time = schedule.start_time + timedelta(minutes=max_total_duration)

    db_schedule = Schedule(
        autoclave_id=schedule.autoclave_id,
        layout_id=schedule.layout_id,
        description=schedule.description,
        start_time=schedule.start_time,
        end_time=end_time,
        color=schedule.color,
        parts=parts
    )

    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule


def update_schedule(db: Session, schedule_id: int, updates: ScheduleUpdate) -> Schedule | None:
    db_schedule = get_schedule(db, schedule_id)
    if not db_schedule:
        return None

    for field, value in updates.dict(exclude_unset=True).items():
        setattr(db_schedule, field, value)

    db.commit()
    db.refresh(db_schedule)
    return db_schedule
