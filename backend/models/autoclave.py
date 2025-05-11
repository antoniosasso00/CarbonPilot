from sqlalchemy import Column, Integer, String, Float, Enum, Table, ForeignKey, Boolean, JSON
from sqlalchemy.orm import relationship
from enum import Enum as PyEnum
from db.base import Base
from models.associations import autoclave_supported_cycles

# Tabella ponte per relazione N:M tra Autoclave e CureCycle
autoclave_supported_cycles = Table(
    "autoclave_supported_cycles",
    Base.metadata,
    Column("autoclave_id", Integer, ForeignKey("autoclaves.id", ondelete="CASCADE"), primary_key=True),
    Column("cycle_code", String, ForeignKey("cure_cycles.code", ondelete="CASCADE"), primary_key=True),
    extend_existing=True
)


class AutoclaveStatus(PyEnum):
    AVAILABLE = "available"
    BUSY = "busy"
    MAINTENANCE = "maintenance"


class Autoclave(Base):
    """Modello per l'autoclave.
    Rappresenta un'autoclave fisica con le sue dimensioni, caratteristiche e stato operativo."""
    __tablename__ = "autoclaves"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    
    # Dimensioni fisiche
    width = Column(Float, nullable=False)  # mm
    height = Column(Float, nullable=False)  # mm
    depth = Column(Float, nullable=False)  # mm
    
    # Caratteristiche tecniche
    max_temperature = Column(Float, nullable=False)  # °C
    max_pressure = Column(Float, nullable=False)  # bar
    num_vacuum_lines = Column(Integer, nullable=False, default=2)  # Numero linee del vuoto
    valve_configuration = Column(JSON, nullable=True)  # Configurazione valvole e sensori
    
    # Stato operativo
    status = Column(Enum(AutoclaveStatus), default=AutoclaveStatus.AVAILABLE, nullable=False)
    is_available = Column(Boolean, default=True)
    maintenance_notes = Column(String, nullable=True)
    last_maintenance = Column(String, nullable=True)

    # Relazione con i layout di nesting
    layouts = relationship("NestingLayout", back_populates="autoclave", cascade="all, delete")
    
    # Relazione con i risultati di nesting
    nesting_results = relationship("NestingResult", back_populates="autoclave", cascade="all, delete")

    # Relazioni
    schedules = relationship("Schedule", back_populates="autoclave", cascade="all, delete")
    supported_cycles = relationship(
        "CureCycle",
        secondary="autoclave_supported_cycles",
        back_populates="autoclaves"
    )

    def __repr__(self):
        return f"<Autoclave {self.name} ({self.status.value})>"

    class Config:
        orm_mode = True
