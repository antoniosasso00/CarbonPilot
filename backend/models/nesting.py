from sqlalchemy import Column, Integer, ForeignKey, Float, Boolean, DateTime, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from db.base import Base

class NestingLayout(Base):
    """Modello per il layout di nesting nell'autoclave.
    Rappresenta una disposizione ottimizzata di parti nell'autoclave."""
    __tablename__ = "nesting_layouts"

    id = Column(Integer, primary_key=True, index=True)
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    autoclave = relationship("Autoclave", back_populates="layouts")
    placements = relationship("NestingPlacement", back_populates="layout", cascade="all, delete")

class NestingPlacement(Base):
    """Modello per il posizionamento di una parte nel layout.
    Definisce la posizione e l'orientamento di ogni parte."""
    __tablename__ = "nesting_placements"

    id = Column(Integer, primary_key=True, index=True)
    layout_id = Column(Integer, ForeignKey("nesting_layouts.id"), nullable=False)
    part_id = Column(Integer, ForeignKey("parts.id"), nullable=False)

    x = Column(Float, nullable=False)  # Posizione X nella griglia
    y = Column(Float, nullable=False)  # Posizione Y nella griglia
    width = Column(Float, nullable=False)  # Larghezza effettiva
    height = Column(Float, nullable=False)  # Altezza effettiva
    rotated = Column(Boolean, default=False)  # Se la parte è ruotata di 90 gradi

    layout = relationship("NestingLayout", back_populates="placements")
    part = relationship("Part")

class NestingResult(Base):
    """Modello per il risultato del nesting.
    Rappresenta il risultato di un'operazione di nesting."""
    __tablename__ = "nesting_results"

    id = Column(Integer, primary_key=True, index=True)
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"), nullable=False)
    layout_image_path = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    autoclave = relationship("Autoclave", back_populates="nesting_results")
