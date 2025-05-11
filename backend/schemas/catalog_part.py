from pydantic import BaseModel, Field
from typing import Optional


class CatalogPartBase(BaseModel):
    name: str
    description: Optional[str] = None
    width: float = Field(..., gt=0)  # mm
    height: float = Field(..., gt=0)  # mm
    material: str
    thickness: float = Field(..., gt=0)  # mm
    cure_cycle_time: int = Field(..., gt=0)  # minuti


class CatalogPartCreate(CatalogPartBase):
    pass


class CatalogPartUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    width: Optional[float] = Field(None, gt=0)
    height: Optional[float] = Field(None, gt=0)
    material: Optional[str] = None
    thickness: Optional[float] = Field(None, gt=0)
    cure_cycle_time: Optional[int] = Field(None, gt=0)


class CatalogPartResponse(CatalogPartBase):
    id: int

    class Config:
        from_attributes = True
