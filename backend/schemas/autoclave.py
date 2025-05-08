from pydantic import BaseModel, Field
from typing import Optional


class AutoclaveBase(BaseModel):
    name: str = Field(..., example="AUTOCLAVE-1")
    width: float = Field(..., example=1000.0)
    height: float = Field(..., example=1000.0)
    depth: float = Field(..., example=2000.0)
    num_vacuum_lines: int = Field(0, example=2)
    is_available: bool = True


class AutoclaveCreate(AutoclaveBase):
    pass


class AutoclaveUpdate(BaseModel):
    width: Optional[float]
    height: Optional[float]
    depth: Optional[float]
    num_vacuum_lines: Optional[int]
    is_available: Optional[bool]


class Autoclave(AutoclaveBase):
    id: int

    class Config:
        orm_mode = True
