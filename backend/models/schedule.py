from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Table, Enum
from sqlalchemy.orm import relationship
from db.base import Base
from datetime import datetime

# Tabella di associazione many-to-many: schedule <-> parts
schedule_part_association = Table(
    "schedule_parts",
    Base.metadata,
    Column("schedule_id", Integer, ForeignKey("schedules.id")),
    Column("part_id", Integer, ForeignKey("parts.id"))
)

# ✅ Tabella di associazione many-to-many: autoclaves <-> cure_cycles
# ✅ Dopo (corretto)
autoclave_supported_cycles = Table(
    "autoclave_supported_cycles",
    Base.metadata,
    Column("autoclave_id", Integer, ForeignKey("autoclaves.id"), primary_key=True),
    Column("cycle_code", ForeignKey("cure_cycles.code"), primary_key=True),
    extend_existing=True  # 👈 evita conflitti di definizione multipla
)

class Schedule(Base):
    __tablename__ = "schedules"

    id = Column(Integer, primary_key=True, index=True)
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"), nullable=False)
    description = Column(String, nullable=True)
    nesting_layout_id = Column(Integer, ForeignKey("nesting_layouts.id"), nullable=True)
    color = Column(String, nullable=True)
    start_time = Column(DateTime(timezone=True), nullable=False)
    end_time = Column(DateTime(timezone=True), nullable=False)

    autoclave = relationship("Autoclave", back_populates="schedules")
    nesting_layout = relationship("NestingLayout")
    parts = relationship("Part", back_populates="schedules")

    class Config:
        orm_mode = True
