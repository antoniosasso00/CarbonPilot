from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
from datetime import datetime


class NestingInput(BaseModel):
    part_ids: List[int]
    autoclave_id: int


class NestingReportRequest(BaseModel):
    layout_id: int


class NestingRead(BaseModel):
    id: int
    autoclave_id: int
    layout_image_path: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True  # compatibile con Pydantic v2


class NestingPart(BaseModel):
    id: int
    width: float = Field(..., gt=0)
    height: float = Field(..., gt=0)


class NestingRequest(BaseModel):
    parts: List[NestingPart]
    container_width: float = Field(..., gt=0)
    container_height: float = Field(..., gt=0)


class NestingResponse(BaseModel):
    id: int
    layout: Dict[str, Any]
    message: str


class NestingResultResponse(BaseModel):
    id: int
    layout_data: Dict[str, Any]
    container_width: float
    container_height: float
    parts_data: List[Dict[str, Any]]
    report_path: str | None
    
    class Config:
        from_attributes = True
