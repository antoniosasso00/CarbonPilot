from sqlalchemy import Column, Integer, String, Float, Boolean
from sqlalchemy.orm import relationship
from database import Base


class Autoclave(Base):
    __tablename__ = "autoclaves"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    width = Column(Float, nullable=False)   # mm
    height = Column(Float, nullable=False)  # mm
    depth = Column(Float, nullable=False)   # mm
    num_valves = Column(Integer, default=0)
    num_vacuum_lines = Column(Integer, default=0)
    is_available = Column(Boolean, default=True)

    # relazioni future con Nesting e Schedule
