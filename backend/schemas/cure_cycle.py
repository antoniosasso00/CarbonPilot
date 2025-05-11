from pydantic import BaseModel

class CureCycleBase(BaseModel):
    code: str
    description: str | None = None
    duration_min: int

class CureCycleCreate(CureCycleBase):
    pass  # eredità completa da Base, senza id

class CureCycleRead(CureCycleBase):
    id: int

    class Config:
        from_attributes = True  # compatibile con Pydantic v2
