# 🛠 CarbonPilot

**CarbonPilot** è un'applicazione web per la gestione, ottimizzazione (nesting) e pianificazione di parti in fibra di carbonio in autoclave.

---

## 🧱 Stack Tecnologico

- **Backend**: FastAPI, SQLAlchemy, Alembic, Pydantic, PostgreSQL, Redis
- **Frontend**: Next.js (App Router), TailwindCSS, TypeScript, shadcn/ui, React Query
- **Ottimizzazione**: Google OR-Tools
- **Deployment**: Docker + Docker Compose

---

## 📁 Struttura Progetto

CarbonPilot/
├── backend/ # Servizio API con FastAPI
├── frontend/ # Interfaccia utente con Next.js
├── docker-compose.yml # Orchestrazione servizi
├── .env # Variabili d'ambiente
└── README.md # Documentazione progetto

yaml
Copia codice

---

## ▶️ Avvio rapido

### 1. Requisiti

- Docker + Docker Compose
- Git

### 2. Avviare l'applicazione

```bash
docker compose up --build
API Backend: http://localhost:8000

Interfaccia Web: http://localhost:3000

🧪 TODO
 UI per gestione manuale del nesting

 Controllo compatibilità geometrica, valvole, cicli

 Firma digitale e PDF automatici

 Modalità offline reparto

📄 Licenza
Progetto ad uso interno nel settore aeronautico.
Per info: Antonio Sasso