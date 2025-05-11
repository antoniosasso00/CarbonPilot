from pydantic import BaseModel
from typing import Optional
from datetime import date

class DailyReportRequest(BaseModel):
    date: Optional[date] = None

class ReportResponse(BaseModel):
    message: str
    filename: Optional[str] = None 