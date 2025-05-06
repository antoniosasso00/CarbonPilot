from pydantic import BaseModel, Field
from typing import Optional


class CatalogPartBase(BaseModel):
    code: str = Field(..., example="TEMPLATE-001")
    description: Optional[str] = Field(None, example="Longeron standard")
    default_width: float = Field(..., example=250.0)
    default_height: float = Field(..., example=100.0)
    default_cycle_code: Optional[str] = Field(None, example="CURE-X")


class CatalogPartCreate(CatalogPartBase):
    pass


class CatalogPartUpdate(BaseModel):
    description: Optional[str]
    default_width: Optional[float]
    default_height: Optional[float]
    default_cycle_code: Optional[str]


class CatalogPartRead(CatalogPartBase):
    id: int

    class Config:
        orm_mode = True
