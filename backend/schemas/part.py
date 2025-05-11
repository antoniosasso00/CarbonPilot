from pydantic import BaseModel, Field, ConfigDict
from enum import Enum
from typing import Optional, List
from datetime import datetime


class PartStatus(str, Enum):
    pending = "pending"
    ready = "ready"
    in_progress = "in_progress"
    completed = "completed"
    rejected = "rejected"


class PartBase(BaseModel):
    name: str
    description: Optional[str] = None
    catalog_part_id: int
    status: PartStatus = PartStatus.pending
    priority: int = Field(default=1, ge=1, le=5)
    
    # Campi tecnici
    valves_required: int = Field(default=1, ge=1)
    lamination_time: Optional[int] = Field(default=None, description="Tempo di laminazione in minuti")
    cycle_code: Optional[str] = None


class PartCreate(PartBase):
    pass


class PartUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    status: Optional[PartStatus] = None
    priority: Optional[int] = Field(default=None, ge=1, le=5)
    valves_required: Optional[int] = Field(default=None, ge=1)
    lamination_time: Optional[int] = None
    cycle_code: Optional[str] = None


class ScheduleInfo(BaseModel):
    id: int
    start_date: datetime
    end_date: datetime
    status: str
    autoclave_id: int
    
    model_config = ConfigDict(from_attributes=True)


class NestingInfo(BaseModel):
    id: int
    created_at: datetime
    efficiency: float
    container_width: float
    container_height: float
    
    model_config = ConfigDict(from_attributes=True)


class CatalogPartInfo(BaseModel):
    id: int
    name: str
    material: str
    width: float
    height: float
    thickness: float
    
    model_config = ConfigDict(from_attributes=True)


class PartResponse(PartBase):
    id: int
    catalog_part: CatalogPartInfo
    schedules: List[ScheduleInfo] = []
    nesting_results: List[NestingInfo] = []
    
    model_config = ConfigDict(from_attributes=True)


# Alias per retrocompatibilità
class Part(PartResponse):
    pass


class PartRead(PartResponse):
    pass
