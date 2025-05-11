from sqlalchemy import Column, Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import relationship
from enum import Enum as PyEnum
from db.base import Base


class PartStatus(PyEnum):
    PENDING = "pending"
    READY = "ready"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    REJECTED = "rejected"


class Part(Base):
    __tablename__ = "parts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    width = Column(Float, nullable=False)  # mm
    height = Column(Float, nullable=False)  # mm
    status = Column(Enum(PartStatus), default=PartStatus.PENDING, nullable=False)
    cycle_code = Column(String, nullable=True)
    source_catalog_id = Column(Integer, ForeignKey("catalog_parts.id"), nullable=True)
    valves_required = Column(Integer, nullable=False, default=1)  # Numero di valvole richieste
    lamination_time = Column(Integer, nullable=True)  # minuti
    catalog_part_id = Column(Integer, ForeignKey("catalog_parts.id"), nullable=False)
    priority = Column(Integer, default=1)

    # Relazione con il catalogo sorgente (opzionale)
    source_catalog = relationship(
        "CatalogPart",
        foreign_keys=[source_catalog_id],
        back_populates="derived_parts"
    )

    # Relazione con il catalogo principale (obbligatoria)
    catalog_part = relationship(
        "CatalogPart",
        foreign_keys=[catalog_part_id],
        back_populates="parts"
    )

    schedules = relationship("Schedule", back_populates="part")
    nesting_results = relationship("NestingResult", secondary="nesting_parts", back_populates="parts")

    class Config:
        orm_mode = True
