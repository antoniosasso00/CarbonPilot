from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import os

# ✅ Default per ambiente Docker
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@carbonpilot-db:5432/postgres")

# ✅ Usa DATABASE_URL se esiste, altrimenti fallback
DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DB_URL)

# Crea engine e sessione
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base da usare nei modelli
Base = declarative_base()

# Dependency per FastAPI
def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
