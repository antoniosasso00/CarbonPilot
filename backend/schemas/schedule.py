from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from schemas.part import PartRead  # dettagli delle parti


class ScheduleBase(BaseModel):
    autoclave_id: int
    description: Optional[str] = None
    layout_id: Optional[str] = None
    color: Optional[str] = None
    start_time: datetime = Field(..., example="2025-05-07T08:00:00")
    part_ids: List[int] = Field(default_factory=list)


class ScheduleCreate(ScheduleBase):
    pass


class ScheduleUpdate(BaseModel):
    description: Optional[str] = None
    layout_id: Optional[str] = None
    color: Optional[str] = None
    start_time: Optional[datetime] = None
    part_ids: Optional[List[int]] = None


class ScheduleRead(ScheduleBase):
    id: int
    end_time: datetime

    class Config:
        orm_mode = True


class ScheduleDetailedRead(ScheduleRead):
    parts: List[PartRead]

    class Config:
        orm_mode = True
