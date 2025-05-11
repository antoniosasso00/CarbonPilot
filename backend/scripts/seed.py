import sys
import os
from datetime import datetime, timedelta
import json

# Aggiungi la directory del backend al path per importare i moduli
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

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
    """Popola il database con dati di esempio"""
    db = SessionLocal()
    try:
        # Crea le tabelle se non esistono
        Base.metadata.create_all(bind=engine)
        
        # Cicli di cura
        cure_cycles = [
            CureCycle(
                code="C001",
                name="Ciclo Standard",
                description="Ciclo di cura standard per compositi",
                max_temperature=180,
                max_pressure=7,
                duration=120
            ),
            CureCycle(
                code="C002",
                name="Ciclo Rapido",
                description="Ciclo di cura rapido per parti sottili",
                max_temperature=150,
                max_pressure=5,
                duration=90
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
                material="Carbon/Epoxy",
                thickness=2.5,
                cure_cycle_time=120  # minuti
            ),
            CatalogPart(
                name="Pannello Large",
                description="Pannello in composito large 2000x1000mm",
                width=2000,
                height=1000,
                material="Carbon/Epoxy",
                thickness=3.0,
                cure_cycle_time=180
            )
        ]
        db.add_all(catalog_parts)
        db.commit()
        
        # Parti
        parts = [
            Part(
                name="P001",
                description="Pannello frontale",
                catalog_part_id=1,
                status="pending",
                priority=1
            ),
            Part(
                name="P002",
                description="Pannello laterale",
                catalog_part_id=2,
                status="ready",
                priority=2
            )
        ]
        db.add_all(parts)
        db.commit()
        
        # Autoclavi
        autoclaves = [
            Autoclave(
                name="AUTO-01",
                description="Autoclave principale",
                width=3000,
                height=1500,
                max_temperature=180,
                max_pressure=7,
                status="available"
            ),
            Autoclave(
                name="AUTO-02",
                description="Autoclave secondaria",
                width=2000,
                height=1000,
                max_temperature=150,
                max_pressure=6,
                status="maintenance"
            )
        ]
        
        # Aggiungi i cicli di cura supportati alle autoclavi
        autoclaves[0].supported_cycles.extend([cure_cycles[0], cure_cycles[1]])  # AUTO-01 supporta entrambi i cicli
        autoclaves[1].supported_cycles.append(cure_cycles[1])  # AUTO-02 supporta solo il ciclo rapido
        
        db.add_all(autoclaves)
        db.commit()
        
        # Layout di nesting
        nesting_results = [
            NestingResult(
                layout_data=json.dumps({
                    "container": {"width": 3000, "height": 1500},
                    "items": [
                        {"id": 1, "x": 0, "y": 0, "width": 1000, "height": 500},
                        {"id": 2, "x": 1000, "y": 0, "width": 2000, "height": 1000}
                    ]
                }),
                container_width=3000,
                container_height=1500,
                parts_data=json.dumps([
                    {"id": 1, "name": "P001"},
                    {"id": 2, "name": "P002"}
                ])
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
                end_date=now + timedelta(hours=3),
                status="scheduled"
            )
        ]
        db.add_all(schedules)
        db.commit()
        
        print("✅ Database popolato con successo!")
        
    except Exception as e:
        print(f"❌ Errore durante il seeding del database: {str(e)}")
        db.rollback()
        raise
    finally:
        db.close()

if __name__ == "__main__":
    seed_database() 