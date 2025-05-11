from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from schemas.cure_cycle import CureCycleCreate, CureCycleRead
from repositories import cure_cycle

router = APIRouter(prefix="/cure-cycles", tags=["Cure Cycles"])


@router.post("/", response_model=CureCycleRead, status_code=201)
def create_cure_cycle(cycle: CureCycleCreate, db: Session = Depends(get_db)):
    existing = cure_cycle.get_cure_cycle(db, code=cycle.code)
    if existing:
        raise HTTPException(status_code=400, detail="Cure cycle already exists")
    return cure_cycle.create_cure_cycle(db, cycle)


@router.get("/", response_model=list[CureCycleRead])
def list_cure_cycles(db: Session = Depends(get_db)):
    return cure_cycle.get_all_cure_cycles(db)


@router.get("/{code}", response_model=CureCycleRead)
def get_cure_cycle_by_code(code: str, db: Session = Depends(get_db)):
    cycle = cure_cycle.get_cure_cycle(db, code)
    if not cycle:
        raise HTTPException(status_code=404, detail="Cure cycle not found")
    return cycle
