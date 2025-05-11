# db/base.py

from sqlalchemy.orm import DeclarativeBase

# ✅ Base usata da tutti i modelli
class Base(DeclarativeBase):
    pass

# ✅ Importa i moduli, non i modelli singoli
# In questo modo SQLAlchemy registra tutte le tabelle, evitando import circolari
from models import (
    cure_cycle,
    catalog_part,
    autoclave,
    part,
    nesting,
    schedule,
)
