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

    # Parti derivate da questo catalogo (relazione principale)
    parts = relationship(
        "Part",
        foreign_keys="Part.catalog_part_id",
        back_populates="catalog_part"
    )

    # Parti che usano questo catalogo come sorgente (relazione opzionale)
    derived_parts = relationship(
        "Part",
        foreign_keys="Part.source_catalog_id",
        back_populates="source_catalog"
    )

    # Facoltativo, utile per coerenza con schema Pydantic
    class Config:
        orm_mode = True
