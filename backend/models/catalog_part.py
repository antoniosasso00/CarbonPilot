from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from db.base import Base


class CatalogPart(Base):
    __tablename__ = "catalog_parts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    width = Column(Float)  # mm
    height = Column(Float)  # mm
    material = Column(String)
    thickness = Column(Float)  # mm
    cure_cycle_time = Column(Integer)  # minuti

    parts = relationship("Part", back_populates="catalog_part")

    # Facoltativo, utile per coerenza con schema Pydantic
    class Config:
        orm_mode = True
