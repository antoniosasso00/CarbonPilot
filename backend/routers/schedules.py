from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db
import crud
from schemas.schedule import ScheduleCreate, ScheduleRead, ScheduleUpdate
from services.nesting import validate_valves_capacity  # 🆕 import

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
    # 🧠 Validazione: numero valvole richieste ≤ linee disponibili
    autoclave = db.query(crud.models.Autoclave).get(schedule.autoclave_id)
    if not autoclave:
        raise HTTPException(status_code=404, detail="Autoclave non trovata")

    parts = db.query(crud.models.Part).filter(crud.models.Part.id.in_(schedule.part_ids)).all()
    if not parts:
        raise HTTPException(status_code=404, detail="Parti non trovate")

    if not validate_valves_capacity([p.__dict__ for p in parts], autoclave.num_vacuum_lines):
        raise HTTPException(
            status_code=400,
            detail=f"Valvole richieste ({sum(p.valves_required for p in parts)}) superano le linee disponibili "
                   f"dell’autoclave ({autoclave.num_vacuum_lines})"
        )

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
