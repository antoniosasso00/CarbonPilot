from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.api_v1.api import api_router
import os
from dotenv import load_dotenv

# Carica le variabili d'ambiente
load_dotenv()

app = FastAPI(
    title="CarbonPilot API",
    description="API per la gestione di autoclavi e processi di cura compositi",
    version="1.0.0"
)

# Configurazione CORS
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Endpoint di test
@app.get("/")
def read_root():
    return {"message": "Benvenuto in CarbonPilot API"}

# Includi i router
app.include_router(api_router, prefix=os.getenv("API_PREFIX", "/api/v1"))
