# tools/diagnostics.py

from fastapi.routing import APIRoute
from main import app
from sqlalchemy import inspect
import os
import subprocess
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from db.base import Base
from database import engine

print("=== 📦 CARBONPILOT DIAGNOSTICS ===\n")

# 1. ROUTER CHECK
print("🔍 API ROUTES:")
for route in app.routes:
    if isinstance(route, APIRoute):
        methods = ",".join(sorted(route.methods))
        print(f" - {methods:10} {route.path}")
print()

# 2. SQLALCHEMY MODELS
print("🏗️  SQLAlchemy MODELS:")
for cls in Base.__subclasses__():
    print(f" - {cls.__name__}")
print()

# 3. DB TABLE STRUCTURE
print("🧱 DB TABLE STRUCTURE:")
inspector = inspect(engine)
for table_name in inspector.get_table_names():
    print(f"\n📌 Table: {table_name}")
    for column in inspector.get_columns(table_name):
        name = column['name']
        type_ = str(column['type'])
        nullable = column['nullable']
        print(f"   - {name:20} | {type_:15} | {'NULL' if nullable else 'NOT NULL'}")
print()

# 4. Pydantic SCHEMAS (if present)
try:
    import schemas
    print("📐 Pydantic Schemas Detected:")
    for attr in dir(schemas):
        item = getattr(schemas, attr)
        if isinstance(item, type) and "BaseModel" in str(item.__mro__):
            print(f" - {attr}")
    print()
except ImportError:
    print("⚠️  Schemas module not found (skipped schema check)\n")

# 5. SEED FILE CHECK
seed_path = os.path.join("tools", "seed.py")
if os.path.exists(seed_path):
    print("🌱 Seed script found at tools/seed.py ✅")
    with open(seed_path, "r", encoding="utf-8") as f:
        content = f.read()
        entries = [line for line in content.splitlines() if "create_" in line and "db" in line]
        print(f"   → Detected {len(entries)} entity creation lines:")
        for line in entries:
            print(f"     - {line.strip()}")
else:
    print("❌ Seed script not found in tools/seed.py")
print()

# 6. OPTIONAL: Docker Status (if in container environment)
try:
    print("🐳 Docker container status:")
    result = subprocess.run(["docker", "ps"], capture_output=True, text=True)
    print(result.stdout)
except Exception:
    print("⚠️  Docker status check skipped (requires host permissions)\n")

def check_database_connection():
    """Verifica la connessione al database."""
    try:
        # Crea le tabelle se non esistono
        Base.metadata.create_all(bind=engine)
        print("✅ Database connesso e tabelle create")
        return True
    except Exception as e:
        print(f"❌ Errore database: {str(e)}")
        return False

if __name__ == "__main__":
    check_database_connection()

print("✅ Diagnostics complete.")
