from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from schemas.part import PartRead  # dettagli delle parti
from enum import Enum


class ScheduleStatus(str, Enum):
    scheduled = "scheduled"
    in_progress = "in_progress"
    completed = "completed"
    cancelled = "cancelled"


class ScheduleBase(BaseModel):
    part_id: int
    autoclave_id: int
    layout_id: Optional[int] = None
    start_date: datetime
    end_date: datetime
    status: ScheduleStatus = ScheduleStatus.scheduled


class ScheduleCreate(ScheduleBase):
    pass


class ScheduleUpdate(BaseModel):
    part_id: Optional[int] = None
    autoclave_id: Optional[int] = None
    layout_id: Optional[int] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    status: Optional[ScheduleStatus] = None


class ScheduleResponse(ScheduleBase):
    id: int
    
    class Config:
        from_attributes = True


class ScheduleRead(ScheduleBase):
    id: int
    end_time: datetime

    class Config:
        from_attributes = True


class ScheduleDetailedRead(ScheduleRead):
    parts: List[PartRead]

    class Config:
        from_attributes = True
