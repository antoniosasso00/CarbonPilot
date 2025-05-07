from fastapi import FastAPI

# Import dei router modulari
from backend.routers import (
    parts,
    catalog_parts,
    autoclaves,
    nesting,
    schedules
)

app = FastAPI(
    title="CarbonPilot API",
    version="0.1.0",
    description="Backend per la gestione del nesting, scheduling e reportistica delle parti in fibra di carbonio."
)

@app.get("/")
def read_root():
    return {"message": "Benvenuto in CarbonPilot API"}

# Inclusione dei router
app.include_router(parts.router, prefix="/parts", tags=["Parts"])
app.include_router(catalog_parts.router, prefix="/catalog", tags=["Catalog"])
app.include_router(autoclaves.router, prefix="/autoclaves", tags=["Autoclaves"])
app.include_router(nesting.router, prefix="/nesting", tags=["Nesting"])
app.include_router(schedules.router, prefix="/schedules", tags=["Schedules"])
