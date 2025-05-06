# CarbonPilot

Applicazione web per la gestione, nesting e pianificazione di parti in fibra di carbonio in autoclave.

## 🧱 Stack Tecnologico

- **Backend**: FastAPI, SQLAlchemy, Alembic, Pydantic, PostgreSQL, Redis
- **Frontend**: Next.js (App Router), TailwindCSS, TypeScript, shadcn/ui, React Query
- **Ottimizzazione**: Google OR-Tools
- **Deployment**: Docker + Docker Compose

## 📁 Struttura Progetto

CarbonPilot/
├── backend/ # Servizio FastAPI
├── frontend/ # Interfaccia Next.js
├── docker-compose.yml # Orchestrazione servizi
├── .env # Variabili d'ambiente
└── README.md # Documentazione

shell
Copia codice

## ▶️ Avvio rapido

### 1. Requisiti

- Docker + Docker Compose
- Git

### 2. Avviare l'applicazione

```bash
docker compose up --build
L'API sarà disponibile su: http://localhost:8000