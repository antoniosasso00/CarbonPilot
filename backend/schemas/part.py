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
    source_catalog_id: Optional[int] = None
    valves_required: int = Field(default=1, example=1, description="Numero di valvole richieste per questa parte")


class PartCreate(PartBase):
    pass


class PartUpdate(BaseModel):
    description: Optional[str]
    width: Optional[float]
    height: Optional[float]
    status: Optional[PartStatus]
    cycle_code: Optional[str]
    source_catalog_id: Optional[int]
    valves_required: Optional[int]


class Part(PartBase):
    id: int

    class Config:
        orm_mode = True
