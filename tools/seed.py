import sys
import os
from datetime import datetime, timedelta
import json
import random

# Aggiungi la directory del backend al path per importare i moduli
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'backend'))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from db.base import Base
from models.part import Part
from models.catalog_part import CatalogPart
from models.autoclave import Autoclave
from models.nesting import NestingResult
from models.schedule import Schedule
from models.cure_cycle import CureCycle

# Configurazione del database
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:postgres@db/carbonpilot"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_database():
    """Popola il database con dati di esempio realistici"""
    db = SessionLocal()
    try:
        # Crea le tabelle se non esistono
        Base.metadata.create_all(bind=engine)
        
        # Cicli di cura
        cure_cycles = [
            CureCycle(
                name="Standard Epoxy",
                description="Ciclo standard per resine epossidiche",
                temperature_profile=json.dumps([
                    {"time": 0, "temp": 25},
                    {"time": 30, "temp": 80},
                    {"time": 90, "temp": 120},
                    {"time": 150, "temp": 120},
                    {"time": 180, "temp": 25}
                ]),
                pressure_profile=json.dumps([
                    {"time": 0, "pressure": 1},
                    {"time": 30, "pressure": 6},
                    {"time": 150, "pressure": 6},
                    {"time": 180, "pressure": 1}
                ]),
                vacuum_profile=json.dumps([
                    {"time": 0, "vacuum": -0.9},
                    {"time": 180, "vacuum": -0.9}
                ]),
                total_time=180
            ),
            CureCycle(
                name="High Temp Cure",
                description="Ciclo ad alta temperatura per parti strutturali",
                temperature_profile=json.dumps([
                    {"time": 0, "temp": 25},
                    {"time": 45, "temp": 90},
                    {"time": 105, "temp": 150},
                    {"time": 165, "temp": 150},
                    {"time": 210, "temp": 25}
                ]),
                pressure_profile=json.dumps([
                    {"time": 0, "pressure": 1},
                    {"time": 45, "pressure": 7},
                    {"time": 165, "pressure": 7},
                    {"time": 210, "pressure": 1}
                ]),
                vacuum_profile=json.dumps([
                    {"time": 0, "vacuum": -0.95},
                    {"time": 210, "vacuum": -0.95}
                ]),
                total_time=210
            )
        ]
        db.add_all(cure_cycles)
        db.commit()
        
        # Catalogo parti
        catalog_parts = [
            CatalogPart(
                name="Pannello Standard",
                description="Pannello in composito standard 1000x500mm",
                width=1000,
                height=500,
                material="Carbon/Epoxy T300",
                thickness=2.5,
                cure_cycle_id=1,
                cure_cycle_time=180
            ),
            CatalogPart(
                name="Pannello Large",
                description="Pannello in composito large 2000x1000mm",
                width=2000,
                height=1000,
                material="Carbon/Epoxy T700",
                thickness=3.0,
                cure_cycle_id=2,
                cure_cycle_time=210
            ),
            CatalogPart(
                name="Rinforzo Strutturale",
                description="Rinforzo a L 500x300mm",
                width=500,
                height=300,
                material="Carbon/Epoxy IM7",
                thickness=4.0,
                cure_cycle_id=2,
                cure_cycle_time=210
            ),
            CatalogPart(
                name="Pannello Sottile",
                description="Pannello leggero 800x400mm",
                width=800,
                height=400,
                material="Carbon/Epoxy T300",
                thickness=1.5,
                cure_cycle_id=1,
                cure_cycle_time=180
            ),
            CatalogPart(
                name="Pannello Rinforzato",
                description="Pannello con core 1500x750mm",
                width=1500,
                height=750,
                material="Carbon/Epoxy + Honeycomb",
                thickness=15.0,
                cure_cycle_id=2,
                cure_cycle_time=210
            )
        ]
        db.add_all(catalog_parts)
        db.commit()
        
        # Parti attive
        status_options = ["pending", "ready", "in_process", "completed", "rejected"]
        parts = [
            Part(
                name=f"P00{i+1}",
                description=f"Part {catalog_parts[i % 5].name}",
                catalog_part_id=i % 5 + 1,
                status=status_options[i % len(status_options)],
                priority=random.randint(1, 5)
            ) for i in range(5)
        ]
        db.add_all(parts)
        db.commit()
        
        # Autoclavi
        autoclaves = [
            Autoclave(
                name="AUTO-01",
                description="Autoclave principale grande",
                width=3000,
                height=1500,
                max_temperature=180,
                max_pressure=7,
                status="available",
                valve_configuration=json.dumps({
                    "vacuum_lines": 4,
                    "pressure_sensors": 6,
                    "temperature_sensors": 8
                })
            ),
            Autoclave(
                name="AUTO-02",
                description="Autoclave media",
                width=2000,
                height=1000,
                max_temperature=150,
                max_pressure=6,
                status="maintenance",
                valve_configuration=json.dumps({
                    "vacuum_lines": 3,
                    "pressure_sensors": 4,
                    "temperature_sensors": 6
                })
            ),
            Autoclave(
                name="AUTO-03",
                description="Autoclave piccola",
                width=1500,
                height=800,
                max_temperature=160,
                max_pressure=6,
                status="in_use",
                valve_configuration=json.dumps({
                    "vacuum_lines": 2,
                    "pressure_sensors": 3,
                    "temperature_sensors": 4
                })
            )
        ]
        db.add_all(autoclaves)
        db.commit()
        
        # Layout di nesting
        nesting_results = [
            NestingResult(
                layout_data=json.dumps({
                    "container": {"width": 3000, "height": 1500},
                    "items": [
                        {"id": 1, "x": 0, "y": 0, "width": 1000, "height": 500},
                        {"id": 2, "x": 1000, "y": 0, "width": 800, "height": 400}
                    ]
                }),
                container_width=3000,
                container_height=1500,
                parts_data=json.dumps([
                    {"id": 1, "name": "P001"},
                    {"id": 2, "name": "P004"}
                ]),
                efficiency=0.85,
                created_at=datetime.now()
            ),
            NestingResult(
                layout_data=json.dumps({
                    "container": {"width": 2000, "height": 1000},
                    "items": [
                        {"id": 3, "x": 0, "y": 0, "width": 500, "height": 300},
                        {"id": 4, "x": 500, "y": 0, "width": 500, "height": 300},
                        {"id": 5, "x": 0, "y": 300, "width": 800, "height": 400}
                    ]
                }),
                container_width=2000,
                container_height=1000,
                parts_data=json.dumps([
                    {"id": 3, "name": "P003"},
                    {"id": 4, "name": "P003"},
                    {"id": 5, "name": "P004"}
                ]),
                efficiency=0.92,
                created_at=datetime.now()
            )
        ]
        db.add_all(nesting_results)
        db.commit()
        
        # Schedule
        now = datetime.now()
        schedules = [
            Schedule(
                part_id=1,
                autoclave_id=1,
                layout_id=1,
                start_date=now + timedelta(hours=1),
                end_date=now + timedelta(hours=4),
                status="scheduled",
                cure_cycle_id=1
            ),
            Schedule(
                part_id=3,
                autoclave_id=2,
                layout_id=2,
                start_date=now + timedelta(hours=4),
                end_date=now + timedelta(hours=7.5),
                status="pending",
                cure_cycle_id=2
            )
        ]
        db.add_all(schedules)
        db.commit()
        
        print("✅ Database popolato con successo!")
        print("📊 Riepilogo:")
        print(f"- Cicli di cura: {len(cure_cycles)}")
        print(f"- Parti catalogo: {len(catalog_parts)}")
        print(f"- Parti attive: {len(parts)}")
        print(f"- Autoclavi: {len(autoclaves)}")
        print(f"- Nesting results: {len(nesting_results)}")
        print(f"- Schedule: {len(schedules)}")
        
    except Exception as e:
        print(f"❌ Errore durante il seeding del database: {str(e)}")
        db.rollback()
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_database() 