from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional


class PartStatus(str, Enum):
    CREATED = "created"
    LAMINATING = "laminating"
    READY = "ready"
    AUTOCLAVED = "autoclaved"


class PartBase(BaseModel):
    part_number: str = Field(..., example="P001-A")
    description: Optional[str] = Field(None, example="Longeron sinistro")
    width: float = Field(..., example=250.0)
    height: float = Field(..., example=100.0)
    status: PartStatus = PartStatus.CREATED
    cycle_code: Optional[str] = Field(None, example="CURE-X")
    lamination_time: Optional[int] = Field(None, example=45, description="Tempo di laminazione in minuti")
    source_catalog_id: Optional[int] = None
    valves_required: int = Field(default=1, example=1, description="Numero di valvole richieste per questa parte")


class PartCreate(PartBase):
    pass


class PartUpdate(BaseModel):
    description: Optional[str] = None
    width: Optional[float] = None
    height: Optional[float] = None
    status: Optional[PartStatus] = None
    cycle_code: Optional[str] = None
    lamination_time: Optional[int] = None
    source_catalog_id: Optional[int] = None
    valves_required: Optional[int] = None


class Part(PartBase):
    id: int

    class Config:
        orm_mode = True


class PartRead(Part):
    pass
