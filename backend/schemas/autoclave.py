from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Dict
from schemas.cure_cycle import CureCycleRead
from enum import Enum
from datetime import datetime


class AutoclaveStatus(str, Enum):
    available = "available"
    busy = "busy"
    maintenance = "maintenance"


class ValveConfiguration(BaseModel):
    vacuum_lines: int = Field(..., ge=1, description="Numero di linee del vuoto")
    pressure_sensors: int = Field(..., ge=1, description="Numero di sensori di pressione")
    temperature_sensors: int = Field(..., ge=1, description="Numero di sensori di temperatura")


class AutoclaveBase(BaseModel):
    name: str
    description: Optional[str] = None
    
    # Dimensioni fisiche
    width: float = Field(..., gt=0, description="Larghezza in mm")
    height: float = Field(..., gt=0, description="Altezza in mm")
    depth: float = Field(..., gt=0, description="Profondità in mm")
    
    # Caratteristiche tecniche
    max_temperature: float = Field(..., gt=0, description="Temperatura massima in °C")
    max_pressure: float = Field(..., gt=0, description="Pressione massima in bar")
    num_vacuum_lines: int = Field(default=2, ge=1, description="Numero di linee del vuoto disponibili")
    valve_configuration: Optional[ValveConfiguration] = None
    
    # Stato operativo
    status: AutoclaveStatus = AutoclaveStatus.available
    is_available: bool = True
    maintenance_notes: Optional[str] = None
    last_maintenance: Optional[str] = None


class AutoclaveCreate(AutoclaveBase):
    supported_cycles: Optional[List[str]] = Field(default=None, description="Codici dei cicli di cura supportati")


class AutoclaveUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    width: Optional[float] = Field(None, gt=0)
    height: Optional[float] = Field(None, gt=0)
    depth: Optional[float] = Field(None, gt=0)
    max_temperature: Optional[float] = Field(None, gt=0)
    max_pressure: Optional[float] = Field(None, gt=0)
    num_vacuum_lines: Optional[int] = Field(None, ge=1)
    valve_configuration: Optional[ValveConfiguration] = None
    status: Optional[AutoclaveStatus] = None
    is_available: Optional[bool] = None
    maintenance_notes: Optional[str] = None
    last_maintenance: Optional[str] = None
    supported_cycles: Optional[List[str]] = None


class ScheduleInfo(BaseModel):
    id: int
    start_date: datetime
    end_date: datetime
    status: str
    part_id: int
    
    model_config = ConfigDict(from_attributes=True)


class NestingInfo(BaseModel):
    id: int
    created_at: datetime
    efficiency: float
    container_width: float
    container_height: float
    
    model_config = ConfigDict(from_attributes=True)


class CureCycleInfo(BaseModel):
    id: int
    name: str
    description: Optional[str]
    total_time: int
    
    model_config = ConfigDict(from_attributes=True)


class AutoclaveResponse(AutoclaveBase):
    id: int
    schedules: List[ScheduleInfo] = []
    nesting_results: List[NestingInfo] = []
    supported_cycles: List[CureCycleInfo] = []
    
    model_config = ConfigDict(from_attributes=True)


# Alias per retrocompatibilità
class Autoclave(AutoclaveResponse):
    pass


class AutoclaveRead(AutoclaveResponse):
    pass
