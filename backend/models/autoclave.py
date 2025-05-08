from sqlalchemy import Column, Integer, String, Float, Boolean
from sqlalchemy.orm import relationship
from database import Base


class Autoclave(Base):
    """Modello per l'autoclave.
    Rappresenta un'autoclave fisica con le sue dimensioni e caratteristiche."""
    __tablename__ = "autoclaves"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    width = Column(Float, nullable=False)   # mm
    height = Column(Float, nullable=False)  # mm
    depth = Column(Float, nullable=False)   # mm
    num_valves = Column(Integer, default=0)
    num_vacuum_lines = Column(Integer, default=0)
    is_available = Column(Boolean, default=True)

    # Relazione con i layout di nesting
    layouts = relationship("NestingLayout", back_populates="autoclave", cascade="all, delete")

    # relazioni future con Nesting e Schedule
