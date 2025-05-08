from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import os

# Ottiene l'URL del database dalle variabili d'ambiente (.env)
DATABASE_URL = os.getenv("DATABASE_URL")

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
