from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import os

# ✅ Fallback per ambiente Docker
DEFAULT_DB_URL = "postgresql://postgres:postgres@carbonpilot-db:5432/postgres"

# ✅ Usa variabile d'ambiente o fallback
DATABASE_URL = os.environ.get("DATABASE_URL") or DEFAULT_DB_URL

# ✅ Engine e sessione
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
