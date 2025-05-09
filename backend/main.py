from fastapi import FastAPI
from routers import (
    parts,
    catalog_parts,
    autoclaves,
    nesting,
    schedules,
    reports,
)

app = FastAPI(
    title="CarbonPilot API",
    version="0.1.0",
    description="Backend per la gestione del nesting, scheduling e reportistica delle parti in fibra di carbonio."
)

@app.get("/")
def read_root():
    return {"message": "Benvenuto in CarbonPilot API"}

# Registrazione router
app.include_router(parts.router)
app.include_router(catalog_parts.router)
app.include_router(autoclaves.router)
app.include_router(nesting.router)
app.include_router(schedules.router)
app.include_router(reports.router)
