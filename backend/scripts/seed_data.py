# scripts/seed_data.py

import sys
import os
import logging
from datetime import datetime, timedelta

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from dotenv import load_dotenv
from sqlalchemy.orm import Session
from sqlalchemy import select, insert
from database import SessionLocal
from models.cure_cycle import CureCycle
from models.autoclave import Autoclave
from models.part import Part, PartStatus
from models.catalog_part import CatalogPart
from models.schedule import Schedule, autoclave_supported_cycles
from models.nesting import NestingLayout, NestingPlacement

# Configurazione logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(env_path)

db: Session = SessionLocal()

try:
    # === 1. CureCycle ===
    cycle_code = "CURE-X"
    cure_cycle = db.scalar(select(CureCycle).where(CureCycle.code == cycle_code))
    if not cure_cycle:
        cure_cycle = CureCycle(code=cycle_code, description="Ciclo di test", duration_min=120)
        db.add(cure_cycle)
        db.commit()
        logger.info(f"Creato ciclo di cura: {cycle_code}")

    # === 2. CatalogPart ===
    catalog_parts = [
        {
            "code": "CAT-001",
            "description": "Pannello standard",
            "default_width": 100,
            "default_height": 50,
            "default_cycle_code": cycle_code
        },
        {
            "code": "CAT-002",
            "description": "Pannello grande",
            "default_width": 150,
            "default_height": 75,
            "default_cycle_code": cycle_code
        }
    ]

    created_catalog_parts = []
    for cat_part in catalog_parts:
        existing = db.scalar(select(CatalogPart).where(CatalogPart.code == cat_part["code"]))
        if not existing:
            new_cat_part = CatalogPart(**cat_part)
            db.add(new_cat_part)
            created_catalog_parts.append(new_cat_part)
            logger.info(f"Creato catalogo parte: {cat_part['code']}")
    
    if created_catalog_parts:
        db.commit()
        for cat_part in created_catalog_parts:
            db.refresh(cat_part)

    # === 3. Autoclave ===
    autoclave_name = "AUTOCLAVE-1"
    autoclave = db.scalar(select(Autoclave).where(Autoclave.name == autoclave_name))
    if not autoclave:
        autoclave = Autoclave(
            name=autoclave_name,
            width=1000,
            height=1000,
            depth=1000,
            num_vacuum_lines=4,
            is_available=True
        )
        db.add(autoclave)
        db.commit()
        db.refresh(autoclave)
        logger.info(f"Creata autoclave: {autoclave_name}")

    # === 4. Link autoclave <-> cure_cycle ===
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
        logger.info(f"Collegato ciclo {cycle_code} all'autoclave {autoclave_name}")

    # === 5. Part ===
    default_parts = [
        {
            "part_number": "P-001",
            "description": "Pannello standard 1",
            "width": 100,
            "height": 50,
            "valves_required": 1,
            "cycle_code": cycle_code,
            "source_catalog_id": created_catalog_parts[0].id if created_catalog_parts else None,
            "status": PartStatus.CREATED,
            "lamination_time": 30
        },
        {
            "part_number": "P-002",
            "description": "Pannello grande 1",
            "width": 150,
            "height": 75,
            "valves_required": 2,
            "cycle_code": cycle_code,
            "source_catalog_id": created_catalog_parts[1].id if len(created_catalog_parts) > 1 else None,
            "status": PartStatus.CREATED,
            "lamination_time": 45
        }
    ]

    created_parts = []
    for part_data in default_parts:
        existing = db.scalar(select(Part).where(Part.part_number == part_data["part_number"]))
        if not existing:
            new_part = Part(**part_data)
            db.add(new_part)
            created_parts.append(new_part)
            logger.info(f"Creata parte: {part_data['part_number']}")
    
    if created_parts:
        db.commit()
        for part in created_parts:
            db.refresh(part)

    # === 6. NestingLayout e NestingPlacement ===
    if created_parts:
        layout = NestingLayout(autoclave_id=autoclave.id)
        db.add(layout)
        db.commit()
        db.refresh(layout)
        logger.info(f"Creato layout di nesting: {layout.id}")

        # Aggiungi i placement per ogni parte
        for i, part in enumerate(created_parts):
            placement = NestingPlacement(
                layout_id=layout.id,
                part_id=part.id,
                x=i * 200,  # Posiziona le parti una accanto all'altra
                y=0,
                width=part.width,
                height=part.height,
                rotated=False
            )
            db.add(placement)
            logger.info(f"Aggiunto placement per parte {part.part_number} nel layout {layout.id}")
        
        db.commit()

    # === 7. Schedule ===
    if created_parts:
        start = datetime.now().replace(second=0, microsecond=0)
        end = start + timedelta(hours=3)
        schedule = Schedule(
            autoclave_id=autoclave.id,
            layout_id=str(layout.id) if 'layout' in locals() else None,
            description="Schedule di test",
            start_time=start,
            end_time=end,
            color="#FFAA00",
            parts=created_parts
        )
        db.add(schedule)
        db.commit()
        logger.info(f"Creata schedule di test con {len(created_parts)} parti")

    logger.info("✅ Seed completato con successo!")

except Exception as e:
    logger.error(f"❌ Errore durante il seed: {str(e)}")
    db.rollback()
    raise
finally:
    db.close()
