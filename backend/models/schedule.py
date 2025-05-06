from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship
from backend.database import Base
from datetime import datetime

# Tabella di associazione many-to-many: schedule <-> parts
schedule_part_association = Table(
    "schedule_parts",
    Base.metadata,
    Column("schedule_id", Integer, ForeignKey("schedules.id")),
    Column("part_id", Integer, ForeignKey("parts.id"))
)


class Schedule(Base):
    __tablename__ = "schedules"

    id = Column(Integer, primary_key=True, index=True)
    autoclave_id = Column(Integer, ForeignKey("autoclaves.id"), nullable=False)
    description = Column(String, nullable=True)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    autoclave = relationship("Autoclave")
    parts = relationship("Part", secondary=schedule_part_association, backref="schedules")
