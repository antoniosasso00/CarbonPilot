# scripts/seed_data.py

import sys
import os
from datetime import datetime, timedelta

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from dotenv import load_dotenv
from sqlalchemy.orm import Session
from sqlalchemy import select, insert
from database import SessionLocal
from models.cure_cycle import CureCycle
from models.autoclave import Autoclave
from models.part import Part
from models.schedule import Schedule, autoclave_supported_cycles

env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(env_path)

db: Session = SessionLocal()

# === 1. CureCycle ===
cycle_code = "CURE-X"
if not db.scalar(select(CureCycle).where(CureCycle.code == cycle_code)):
    db.add(CureCycle(code=cycle_code, description="Ciclo di test", duration_min=120))
    db.commit()

# === 2. Autoclave ===
autoclave_name = "AUTOCLAVE-1"
autoclave = db.scalar(select(Autoclave).where(Autoclave.name == autoclave_name))
if not autoclave:
    autoclave = Autoclave(
        name=autoclave_name,
        width=100,
        height=100,
        depth=100,
        num_vacuum_lines=4,
        is_available=True
    )
    db.add(autoclave)
    db.commit()
    db.refresh(autoclave)

# === 3. Link autoclave <-> cure_cycle ===
link = db.execute(
    select(autoclave_supported_cycles)
    .where(autoclave_supported_cycles.c.autoclave_id == autoclave.id)
    .where(autoclave_supported_cycles.c.cycle_code == cycle_code)
).first()
if not link:
    db.execute(insert(autoclave_supported_cycles).values(
        autoclave_id=autoclave.id,
        cycle_code=cycle_code
    ))
    db.commit()

# === 4. Part ===
default_parts = [
    {"part_number": "P-001", "width": 20, "height": 10, "valves_required": 1, "cycle_code": cycle_code},
    {"part_number": "P-002", "width": 30, "height": 15, "valves_required": 2, "cycle_code": cycle_code},
    {"part_number": "P-003", "width": 25, "height": 12, "valves_required": 1, "cycle_code": cycle_code},
]

for part in default_parts:
    if not db.scalar(select(Part).where(Part.part_number == part["part_number"])):
        db.add(Part(**part))
db.commit()

# Recupera tutte le parts
parts = db.scalars(select(Part)).all()

# === 5. Schedule ===
existing_schedule = db.scalar(select(Schedule).where(Schedule.description == "Schedule di test"))
if not existing_schedule:
    start = datetime.now().replace(second=0, microsecond=0)
    end = start + timedelta(hours=3)
    schedule = Schedule(
        autoclave_id=autoclave.id,
        layout_id="LYT-001",
        description="Schedule di test",
        start_time=start,
        end_time=end,
        color="#FFAA00",
        parts=parts  # tutte le parti create
    )
    db.add(schedule)
    db.commit()

print("✅ Seed completato con: cure_cycle, autoclave, link, parts, schedule")
