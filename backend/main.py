from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

# ✅ CORS middleware (necessario per comunicazione frontend-backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # oppure ["http://localhost:3000"] per sicurezza
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Endpoint di test
@app.get("/")
def read_root():
    return {"message": "Benvenuto in CarbonPilot API"}

# ✅ Registrazione router con prefix
app.include_router(parts.router, prefix="/parts", tags=["Parts"])
app.include_router(catalog_parts.router, prefix="/catalog", tags=["Catalog"])
app.include_router(autoclaves.router, prefix="/autoclaves", tags=["Autoclaves"])
app.include_router(nesting.router, prefix="/nesting", tags=["Nesting"])
app.include_router(schedules.router, prefix="/schedules", tags=["Schedules"])
app.include_router(reports.router, prefix="/reports", tags=["Reports"])
