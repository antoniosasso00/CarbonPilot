from pydantic import BaseModel, Field
from typing import Optional, List
from schemas.cure_cycle import CureCycleRead  # 👈 import necessario


class AutoclaveBase(BaseModel):
    name: str = Field(..., example="AUTOCLAVE-1")
    width: float = Field(..., example=1000.0)
    height: float = Field(..., example=1000.0)
    depth: float = Field(..., example=2000.0)
    num_vacuum_lines: int = Field(0, example=2)
    is_available: bool = True


class AutoclaveCreate(AutoclaveBase):
    # Inseribile al momento della creazione (opzionale)
    supported_cycles: Optional[List[str]] = Field(None, description="Codici dei cicli di cura supportati")
    pass


class AutoclaveUpdate(BaseModel):
    width: Optional[float]
    height: Optional[float]
    depth: Optional[float]
    num_vacuum_lines: Optional[int]
    is_available: Optional[bool]
    supported_cycles: Optional[List[str]]  # codici aggiornabili opzionalmente


class Autoclave(AutoclaveBase):
    id: int
    supported_cycles: List[CureCycleRead] = []  # output: lista completa dei cicli associati

    class Config:
        orm_mode = True


# Alias per compatibilità con response_model
AutoclaveRead = Autoclave
