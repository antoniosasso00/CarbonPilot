from sqlalchemy.orm import Session
from database import SessionLocal
from models.part import PartStatus, Part
from models.autoclave import Autoclave, autoclave_supported_cycles
from models.cure_cycle import CureCycle
from models.catalog_part import CatalogPart

# Inizializza la sessione DB
db: Session = SessionLocal()

# ✅ 1. Inserisci ciclo di cura
cycle = CureCycle(code="CURE-X", description="Standard cure", duration_min=120)
db.merge(cycle)

# ✅ 2. Inserisci autoclave con il ciclo supportato
autoclave = Autoclave(
    name="AUTOCLAVE-1",
    width=1000.0,
    height=1000.0,
    depth=2000.0,
    num_vacuum_lines=4,
    is_available=True,
)
db.merge(autoclave)
db.commit()

# Associa il ciclo alla autoclave
db.execute(autoclave_supported_cycles.insert().values(
    autoclave_id=autoclave.id,
    cycle_code=cycle.code
))

# ✅ 3. Inserisci una voce nel catalogo (richiesta per foreign key parts)
catalog_part = CatalogPart(
    code="P001-A",
    default_width=250,
    default_height=100,
    default_cycle_code="CURE-X"
)
db.merge(catalog_part)
db.commit()

# ✅ 4. Inserisci 2 parti collegate al ciclo
part1 = Part(
    part_number="P001-A",
    description="Longeron sinistro",
    width=250.0,
    height=100.0,
    status=PartStatus.CREATED,
    cycle_code="CURE-X",
    lamination_time=45,
    source_catalog_id=catalog_part.id,
    valves_required=1,
)

part2 = Part(
    part_number="P002-B",
    description="Longeron destro",
    width=250.0,
    height=100.0,
    status=PartStatus.CREATED,
    cycle_code="CURE-X",
    lamination_time=50,
    source_catalog_id=catalog_part.id,
    valves_required=2,
)

db.add_all([part1, part2])
db.commit()

print("✅ Dati seed inseriti con successo.")
