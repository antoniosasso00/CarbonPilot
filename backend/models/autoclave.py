from sqlalchemy import Column, Integer, String, Float, Boolean, Table, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

# Tabella ponte per relazione N:M tra Autoclave e CureCycle
autoclave_supported_cycles = Table(
    "autoclave_supported_cycles",
    Base.metadata,
    Column("autoclave_id", Integer, ForeignKey("autoclaves.id", ondelete="CASCADE"), primary_key=True),
    Column("cycle_code", String, ForeignKey("cure_cycles.code", ondelete="CASCADE"), primary_key=True)
)


class Autoclave(Base):
    """Modello per l'autoclave.
    Rappresenta un'autoclave fisica con le sue dimensioni e caratteristiche."""
    __tablename__ = "autoclaves"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    width = Column(Float, nullable=False)   # mm
    height = Column(Float, nullable=False)  # mm
    depth = Column(Float, nullable=False)   # mm
    num_vacuum_lines = Column(Integer, default=0)  # Numero linee del vuoto disponibili
    is_available = Column(Boolean, default=True)

    # Relazione con i layout di nesting
    layouts = relationship("NestingLayout", back_populates="autoclave", cascade="all, delete")

    # Relazione con i cicli supportati
    supported_cycles = relationship(
        "CureCycle",
        secondary=autoclave_supported_cycles,
        backref="autoclaves"
    )

    class Config:
        orm_mode = True
