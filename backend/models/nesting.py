from sqlalchemy import Column, Integer, ForeignKey, Float, Boolean, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from db.base import Base

class NestingLayout(Base):
    __tablename__ = "nesting_layouts"

    id = Column(Integer, primary_key=True, index=True)
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    autoclave = relationship("Autoclave", back_populates="layouts")
    placements = relationship("NestingPlacement", back_populates="layout", cascade="all, delete")

class NestingPlacement(Base):
    __tablename__ = "nesting_placements"

    id = Column(Integer, primary_key=True, index=True)
    layout_id = Column(Integer, ForeignKey("nesting_layouts.id"), nullable=False)
    part_id = Column(Integer, ForeignKey("parts.id"), nullable=False)

    x = Column(Float, nullable=False)
    y = Column(Float, nullable=False)
    width = Column(Float, nullable=False)
    height = Column(Float, nullable=False)
    rotated = Column(Boolean, default=False)

    layout = relationship("NestingLayout", back_populates="placements")
    part = relationship("Part")
