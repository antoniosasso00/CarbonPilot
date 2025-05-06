from sqlalchemy import Column, Integer, String, Float, Enum, ForeignKey
from sqlalchemy.orm import relationship
from enum import Enum as PyEnum
from backend.database import Base


class PartStatus(PyEnum):
    CREATED = "created"
    LAMINATING = "laminating"
    READY = "ready"
    AUTOCLAVED = "autoclaved"


class Part(Base):
    __tablename__ = "parts"

    id = Column(Integer, primary_key=True, index=True)
    part_number = Column(String, unique=True, index=True, nullable=False)
    description = Column(String, nullable=True)
    width = Column(Float, nullable=False)  # mm
    height = Column(Float, nullable=False)  # mm
    status = Column(Enum(PartStatus), default=PartStatus.CREATED, nullable=False)
    cycle_code = Column(String, nullable=True)
    source_catalog_id = Column(Integer, ForeignKey("catalog_parts.id"), nullable=True)

    source_catalog = relationship("CatalogPart", back_populates="parts")
