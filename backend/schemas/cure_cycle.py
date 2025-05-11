from pydantic import BaseModel

class CureCycleRead(BaseModel):
    code: str
    description: str | None = None
    duration_min: int

    class Config:
        from_attributes = True  # compatibile con Pydantic v2
