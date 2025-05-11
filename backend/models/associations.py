from sqlalchemy import Column, Integer, String, ForeignKey, Table
from db.base import Base

# Tabella ponte per relazione N:M tra Autoclave e CureCycle
autoclave_supported_cycles = Table(
    'autoclave_supported_cycles',
    Base.metadata,
    Column('autoclave_id', Integer, ForeignKey('autoclaves.id')),
    Column('cycle_code', String, ForeignKey('cure_cycles.code')),
    extend_existing=True
) 