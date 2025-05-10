from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class ScheduleBase(BaseModel):
    autoclave_id: int
    description: Optional[str] = None
    layout_id: Optional[str] = None
    color: Optional[str] = None
    start_time: datetime = Field(..., example="2025-05-07T08:00:00")
    end_time: datetime = Field(..., example="2025-05-07T14:00:00")
    part_ids: List[int] = Field(default_factory=list)


class ScheduleCreate(ScheduleBase):
    pass


class ScheduleUpdate(BaseModel):
    description: Optional[str]
    layout_id: Optional[str]
    color: Optional[str]
    start_time: Optional[datetime]
    end_time: Optional[datetime]
    part_ids: Optional[List[int]]


class ScheduleRead(ScheduleBase):
    id: int

    class Config:
        orm_mode = True
