from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from database import Base


class CatalogPart(Base):
    __tablename__ = "catalog_parts"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, nullable=False)
    description = Column(String, nullable=True)
    default_width = Column(Float, nullable=False)
    default_height = Column(Float, nullable=False)
    default_cycle_code = Column(String, nullable=True)

    parts = relationship("Part", back_populates="source_catalog")

    # Facoltativo, utile per coerenza con schema Pydantic
    class Config:
        orm_mode = True
