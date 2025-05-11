from sqlalchemy import Column, String, Integer, Float
from sqlalchemy.orm import relationship
from db.base import Base
from models.associations import autoclave_supported_cycles

class CureCycle(Base):
    __tablename__ = "cure_cycles"

    code = Column(String, primary_key=True, index=True)  # es. "C001"
    name = Column(String, nullable=False)
    description = Column(String)
    max_temperature = Column(Float, nullable=False)  # °C
    max_pressure = Column(Float, nullable=False)  # bar
    duration = Column(Integer, nullable=False)  # minuti
    
    # Relazioni
    autoclaves = relationship(
        "Autoclave",
        secondary=autoclave_supported_cycles,
        back_populates="supported_cycles"
    )

    def __repr__(self):
        return f"<CureCycle {self.code}>"

    # Coerenza con schema Pydantic
    class Config:
        orm_mode = True
