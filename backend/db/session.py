from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
import os

# Configurazione del database
POSTGRES_USER = os.getenv("POSTGRES_USER", "postgres")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "postgres")
POSTGRES_DB = os.getenv("POSTGRES_DB", "carbonpilot")
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "db")

SQLALCHEMY_DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}"

# Crea l'engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Crea la SessionLocal
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db() -> Session:
    """Dependency per ottenere una sessione del database"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 