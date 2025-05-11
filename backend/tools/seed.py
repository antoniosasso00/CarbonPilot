from datetime import datetime, timedelta
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy.orm import Session
from models.part import Part
from models.catalog_part import CatalogPart
from models.autoclave import Autoclave
from models.cure_cycle import CureCycle
from models.nesting_result import NestingResult
from models.schedule import Schedule
from database import SessionLocal, engine
import models.base

def seed_database():
    models.base.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    try:
        # Creazione CatalogPart
        catalog_parts = [
            CatalogPart(
                name="Wing Component A",
                material="Carbon Fiber",
                length=1000,
                width=500,
                thickness=5,
                cure_time=120
            ),
            CatalogPart(
                name="Fuselage Component B",
                material="Carbon Fiber",
                length=2000,
                width=800,
                thickness=8,
                cure_time=180
            )
        ]
        db.add_all(catalog_parts)
        db.commit()

        # Creazione Part
        parts = [
            Part(
                catalog_part_id=1,
                status="pending",
                priority=1,
                due_date=datetime.now() + timedelta(days=7)
            ) for _ in range(3)
        ] + [
            Part(
                catalog_part_id=2,
                status="in_progress",
                priority=2,
                due_date=datetime.now() + timedelta(days=5)
            ) for _ in range(2)
        ]
        db.add_all(parts)
        db.commit()

        # Creazione Autoclave
        autoclaves = [
            Autoclave(
                name="Autoclave 1",
                status="available",
                max_length=3000,
                max_width=1500,
                max_height=1000
            ),
            Autoclave(
                name="Autoclave 2",
                status="occupied",
                max_length=2500,
                max_width=1200,
                max_height=800
            )
        ]
        db.add_all(autoclaves)
        db.commit()

        # Creazione CureCycle
        cure_cycles = [
            CureCycle(
                name="Standard Cycle",
                temperature_profile="[(0,25),(60,120),(120,120),(180,25)]",
                pressure_profile="[(0,1),(30,6),(150,6),(180,1)]",
                vacuum_profile="[(0,-0.9),(180,-0.9)]",
                total_time=180
            ),
            CureCycle(
                name="Quick Cycle",
                temperature_profile="[(0,25),(30,150),(90,150),(120,25)]",
                pressure_profile="[(0,1),(15,5),(105,5),(120,1)]",
                vacuum_profile="[(0,-0.9),(120,-0.9)]",
                total_time=120
            )
        ]
        db.add_all(cure_cycles)
        db.commit()

        # Creazione NestingResult
        nesting_result = NestingResult(
            layout_data='{"parts": [1,2,3], "positions": [[0,0],[500,0],[1000,0]]}',
            efficiency=0.85,
            created_at=datetime.now()
        )
        db.add(nesting_result)
        db.commit()

        # Creazione Schedule
        schedule = Schedule(
            autoclave_id=1,
            cure_cycle_id=1,
            nesting_result_id=1,
            start_time=datetime.now(),
            end_time=datetime.now() + timedelta(hours=3),
            status="planned"
        )
        db.add(schedule)
        db.commit()

        print("✅ Database popolato con successo!")
        
    except Exception as e:
        print(f"❌ Errore durante il seeding: {str(e)}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_database() 