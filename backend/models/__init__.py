# models/__init__.py

# Questo file serve per rendere la directory un package Python.
# NON importa direttamente i modelli per evitare import circolari.

# Se Alembic necessita dell'esportazione dei nomi:
__all__ = [
    "CureCycle",
    "Autoclave",
    "CatalogPart",
    "Part",
    "NestingLayout",
    "NestingPlacement",
    "NestingResult",
    "Schedule",
]
