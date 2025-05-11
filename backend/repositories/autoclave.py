from sqlalchemy.orm import Session
from models.autoclave import Autoclave
from models.cure_cycle import CureCycle
from schemas.autoclave import AutoclaveCreate, AutoclaveUpdate


def get_autoclave(db: Session, autoclave_id: int) -> Autoclave | None:
    return db.query(Autoclave).filter(Autoclave.id == autoclave_id).first()


def get_autoclave_by_name(db: Session, name: str) -> Autoclave | None:
    return db.query(Autoclave).filter(Autoclave.name == name).first()


def get_all_autoclaves(db: Session) -> list[Autoclave]:
    return db.query(Autoclave).all()


def create_autoclave(db: Session, autoclave: AutoclaveCreate) -> Autoclave:
    db_autoclave = Autoclave(
        name=autoclave.name,
        width=autoclave.width,
        height=autoclave.height,
        depth=autoclave.depth,
        num_vacuum_lines=autoclave.num_vacuum_lines,
        is_available=autoclave.is_available,
    )

    # Collegamento cicli supportati, se forniti
    if autoclave.supported_cycles:
        cycles = db.query(CureCycle).filter(CureCycle.code.in_(autoclave.supported_cycles)).all()
        db_autoclave.supported_cycles = cycles

    db.add(db_autoclave)
    db.commit()
    db.refresh(db_autoclave)
    return db_autoclave


def update_autoclave(db: Session, autoclave_id: int, updates: AutoclaveUpdate) -> Autoclave | None:
    db_autoclave = get_autoclave(db, autoclave_id)
    if not db_autoclave:
        return None

    for field, value in updates.dict(exclude_unset=True).items():
        if field == "supported_cycles":
            db_autoclave.supported_cycles = db.query(CureCycle).filter(CureCycle.code.in_(value)).all()
        else:
            setattr(db_autoclave, field, value)

    db.commit()
    db.refresh(db_autoclave)
    return db_autoclave
