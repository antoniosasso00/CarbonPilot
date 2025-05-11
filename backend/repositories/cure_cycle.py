from sqlalchemy.orm import Session
from models.cure_cycle import CureCycle
from schemas.cure_cycle import CureCycleCreate


def get_cure_cycle(db: Session, code: str) -> CureCycle | None:
    """Restituisce un CureCycle dato il suo codice."""
    return db.query(CureCycle).filter(CureCycle.code == code).first()


def get_all_cure_cycles(db: Session) -> list[CureCycle]:
    """Restituisce tutti i cicli di cura disponibili."""
    return db.query(CureCycle).all()


def create_cure_cycle(db: Session, cycle: CureCycleCreate) -> CureCycle:
    """Crea un nuovo ciclo di cura."""
    db_cycle = CureCycle(**cycle.dict())
    db.add(db_cycle)
    db.commit()
    db.refresh(db_cycle)
    return db_cycle
