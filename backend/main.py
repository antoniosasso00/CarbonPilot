# backend/main.py

from fastapi import FastAPI

app = FastAPI(
    title="CarbonPilot API",
    version="0.1.0",
    description="Backend per la gestione del nesting, scheduling e reportistica delle parti in fibra di carbonio."
)

@app.get("/")
def read_root():
    return {"message": "Benvenuto in CarbonPilot API"}
