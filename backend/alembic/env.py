import sys
import os

# ✅ Rendi visibile la cartella backend per importare database e models
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from dotenv import load_dotenv

# ✅ Percorso al file .env
env_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
load_dotenv(env_path)

print("DATABASE_URL:", os.getenv("DATABASE_URL"))

from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context

# Alembic config object
config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Import modelli e metadata (corretti)
from database import Base
import models.autoclave
import models.part
import models.schedule
import models.nesting  # Aggiungo il modulo nesting

target_metadata = Base.metadata  # collega metadata a Base

def run_migrations_offline() -> None:
    """Esegui le migration in modalità offline"""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    """Esegui le migration in modalità online"""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section) or {},
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )
        with context.begin_transaction():
            context.run_migrations()

# Avvia la modalità corretta
if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
