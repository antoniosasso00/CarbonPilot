"""Script per popolare il database con dati di test per CarbonPilot v1.0.0"""

import sys
import os
from datetime import datetime, timedelta
import json
from typing import List

# Aggiungi la directory del backend al path per importare i moduli
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session

from database import get_db, engine, SessionLocal
from db.base import Base
from models.part import Part, PartStatus
from models.catalog_part import CatalogPart
from models.autoclave import Autoclave, AutoclaveStatus
from models.cure_cycle import CureCycle
from models.nesting import NestingLayout, NestingPlacement, NestingResult
from models.schedule import Schedule

# Usa l'host del container Docker
DATABASE_URL = "postgresql://postgres:postgres@carbonpilot-db:5432/carbonpilot"

def seed_database():
    """Popola il database con dati di test."""
    print("🌱 Inizializzazione seed database...")
    
    # Crea le tabelle se non esistono
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    try:
        # === 1. CureCycle ===
        print("\n📦 Creazione cicli di cura...")
        cure_cycles = [
            CureCycle(
                code="CURE-001",
                name="Ciclo Standard",
                description="Ciclo di cura standard per compositi",
                max_temperature=180,
                max_pressure=7,
                duration=120
            ),
            CureCycle(
                code="CURE-002",
                name="Ciclo Rapido",
                description="Ciclo di cura rapido per parti sottili",
                max_temperature=150,
                max_pressure=5,
                duration=90
            )
        ]
        db.add_all(cure_cycles)
        db.commit()
        print("✅ Cicli di cura creati")

        # === 2. CatalogPart ===
        print("\n📦 Creazione parti catalogo...")
        catalog_parts = [
            CatalogPart(
                name="Pannello Standard",
                description="Pannello in composito standard 1000x500mm",
                width=1000,
                height=500,
                material="Carbon/Epoxy",
                thickness=2.5,
                cure_cycle_time=120
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
        print("✅ Parti catalogo create")

        # === 3. Part ===
        print("\n📦 Creazione parti...")
        parts = [
            Part(
                name="P001",
                description="Pannello frontale 1",
                width=1000,
                height=500,
                status=PartStatus.PENDING,
                cycle_code=cure_cycles[0].code,
                catalog_part_id=catalog_parts[0].id,
                valves_required=1,
                lamination_time=30,
                priority=1
            ),
            Part(
                name="P002",
                description="Pannello frontale 2",
                width=1000,
                height=500,
                status=PartStatus.READY,
                cycle_code=cure_cycles[0].code,
                catalog_part_id=catalog_parts[0].id,
                valves_required=1,
                lamination_time=30,
                priority=1
            ),
            Part(
                name="P003",
                description="Pannello laterale 1",
                width=2000,
                height=1000,
                status=PartStatus.PENDING,
                cycle_code=cure_cycles[1].code,
                catalog_part_id=catalog_parts[1].id,
                valves_required=2,
                lamination_time=45,
                priority=2
            ),
            Part(
                name="P004",
                description="Pannello laterale 2",
                width=2000,
                height=1000,
                status=PartStatus.READY,
                cycle_code=cure_cycles[1].code,
                catalog_part_id=catalog_parts[1].id,
                valves_required=2,
                lamination_time=45,
                priority=2
            ),
            Part(
                name="P005",
                description="Pannello speciale",
                width=1500,
                height=750,
                status=PartStatus.PENDING,
                cycle_code=cure_cycles[0].code,
                catalog_part_id=catalog_parts[0].id,
                valves_required=2,
                lamination_time=40,
                priority=3
            )
        ]
        db.add_all(parts)
        db.commit()
        print("✅ Parti create")

        # === 4. Autoclave ===
        print("\n📦 Creazione autoclavi...")
        autoclaves = [
            Autoclave(
                name="AUTO-01",
                description="Autoclave principale",
                width=3000,
                height=1500,
                depth=2000,
                max_temperature=180,
                max_pressure=7,
                num_vacuum_lines=4,
                valve_configuration=json.dumps({
                    "vacuum_lines": 4,
                    "pressure_sensors": 2,
                    "temperature_sensors": 4
                }),
                status=AutoclaveStatus.AVAILABLE,
                is_available=True
            ),
            Autoclave(
                name="AUTO-02",
                description="Autoclave secondaria",
                width=2000,
                height=1000,
                depth=1500,
                max_temperature=150,
                max_pressure=6,
                num_vacuum_lines=2,
                valve_configuration=json.dumps({
                    "vacuum_lines": 2,
                    "pressure_sensors": 1,
                    "temperature_sensors": 2
                }),
                status=AutoclaveStatus.AVAILABLE,
                is_available=True
            )
        ]
        
        # Aggiungi i cicli di cura supportati alle autoclavi
        autoclaves[0].supported_cycles.extend(cure_cycles)  # AUTO-01 supporta entrambi i cicli
        autoclaves[1].supported_cycles.append(cure_cycles[1])  # AUTO-02 supporta solo il ciclo rapido
        
        db.add_all(autoclaves)
        db.commit()
        print("✅ Autoclavi create")

        # === 5. NestingLayout e NestingResult ===
        print("\n📦 Creazione layout nesting...")
        layout = NestingLayout(autoclave_id=autoclaves[0].id)
        db.add(layout)
        db.commit()

        # Aggiungi i placement per le prime 3 parti
        placements = [
            NestingPlacement(
                layout_id=layout.id,
                part_id=parts[0].id,
                x=0,
                y=0,
                width=parts[0].width,
                height=parts[0].height,
                rotated=False
            ),
            NestingPlacement(
                layout_id=layout.id,
                part_id=parts[1].id,
                x=parts[0].width + 50,  # 50mm di spazio
                y=0,
                width=parts[1].width,
                height=parts[1].height,
                rotated=False
            ),
            NestingPlacement(
                layout_id=layout.id,
                part_id=parts[2].id,
                x=0,
                y=parts[0].height + 50,  # 50mm di spazio
                width=parts[2].width,
                height=parts[2].height,
                rotated=False
            )
        ]
        db.add_all(placements)
        db.commit()

        # Crea il risultato del nesting
        nesting_result = NestingResult(
            autoclave_id=autoclaves[0].id,
            layout_image_path="/static/nesting/layout_001.png"
        )
        db.add(nesting_result)
        db.commit()
        print("✅ Layout nesting creato")

        # === 6. Schedule ===
        print("\n📦 Creazione schedule...")
        now = datetime.now()
        schedule = Schedule(
            part_id=parts[0].id,
            autoclave_id=autoclaves[0].id,
            layout_id=layout.id,
            start_date=now + timedelta(hours=1),
            end_date=now + timedelta(hours=4),
            status="scheduled"
        )
        db.add(schedule)
        db.commit()
        print("✅ Schedule creata")

        print("\n✨ Seed database completato con successo!")
        
    except Exception as e:
        print(f"\n❌ Errore durante il seed: {str(e)}")
        db.rollback()
        raise
    finally:
        db.close()

if __name__ == "__main__":
    try:
        seed_database()
        print("\n✅ Seed completato con successo!")
    except Exception as e:
        print(f"\n❌ Errore durante il seed: {str(e)}")
        sys.exit(1) 