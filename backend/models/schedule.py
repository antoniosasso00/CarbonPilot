from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Table, Enum
from sqlalchemy.orm import relationship
from database import Base
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
    part_id = Column(Integer, ForeignKey("parts.id"))
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"))
    layout_id = Column(Integer, ForeignKey("nesting_results.id"), nullable=True)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    status = Column(Enum("scheduled", "in_progress", "completed", "cancelled", name="schedule_status"))

    # Relazioni
    part = relationship("Part", back_populates="schedules")
    autoclave = relationship("Autoclave", back_populates="schedules")
    layout = relationship("NestingResult", back_populates="schedules")

    class Config:
        orm_mode = True
