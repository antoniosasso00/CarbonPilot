from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class ScheduleBase(BaseModel):
    autoclave_id: int
    description: Optional[str] = None
    layout_id: Optional[str] = None
    color: Optional[str] = None
    start_time: datetime = Field(..., example="2025-05-07T08:00:00")
    part_ids: List[int] = Field(default_factory=list)


class ScheduleCreate(ScheduleBase):
    pass  # part_ids resta nel base


class ScheduleUpdate(BaseModel):
    description: Optional[str]
    layout_id: Optional[str]
    color: Optional[str]
    start_time: Optional[datetime]
    part_ids: Optional[List[int]]  # end_time viene rimosso perché ora è calcolato


class ScheduleRead(ScheduleBase):
    id: int
    end_time: datetime  # restituito ma non richiesto in input

    class Config:
        orm_mode = True
