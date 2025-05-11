from sqlalchemy import Column, String, Integer
from database import Base

class CureCycle(Base):
    __tablename__ = "cure_cycles"

    code = Column(String, primary_key=True, index=True)  # es. "C001"
    description = Column(String, nullable=True)          # descrizione tecnica o nome ciclo
    duration_min = Column(Integer, nullable=False)       # durata in minuti

    # Coerenza con schema Pydantic
    class Config:
        orm_mode = True
