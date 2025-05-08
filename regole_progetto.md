# Regole del Progetto – CarbonPilot

**Nome progetto**: CarbonPilot  
**Dominio**: Produzione compositi in ambito aeronautico

## Obiettivo principale
Creare un'applicazione web completa e usabile in reparto per:
- Gestione delle parti in fibra di carbonio
- Ottimizzazione nesting (OR-Tools)
- Pianificazione dei cicli in autoclave
- Gestione valvole e linee del vuoto
- Generazione di report PDF giornalieri
- Interfaccia industriale desktop, preferibilmente offline-ready

---

## Stack Tecnologico

### Backend
- FastAPI, Pydantic, SQLAlchemy, Alembic
- PostgreSQL
- Redis (futuro supporto caching)
- Docker, Poetry

### Frontend
- Next.js (App Router), TypeScript
- TailwindCSS
- shadcn/ui
- React Query
- React Big Calendar

### Ottimizzazione
- Google OR-Tools (CP-SAT solver)

### Deployment
- Docker + Docker Compose

---

## Modalità di lavoro

### Procedura di sviluppo
- Si procede **una azione alla volta**, step-by-step:
  1. L’utente comunica contenuto o percorso
  2. ChatGPT genera il file richiesto
  3. L’utente incolla o crea il file nel progetto
  4. ChatGPT guida verso la fase successiva
- L'approccio è **modulare, incrementale e versionabile**

### Versionamento e milestone
- Si segue [Semantic Versioning](https://semver.org/)
- Ogni milestone significativa viene taggata (`v0.1.0`, `v1.0.0`, ecc.)
- Ogni commit è singolo, chiaro e tracciato
- Le modifiche sono registrate nel file `CHANGELOG.md`

---

## Entità chiave
- **Part**: stato, dimensioni, ciclo, sorgente da catalogo
- **CatalogPart**: template standardizzabili
- **Autoclave**: dimensioni, cicli supportati, valvole e linee del vuoto
- **Nesting**: layout automatico/manuale con OR-Tools
- **Schedule**: pianificazione con calendario
- **Report**: PDF giornaliero con layout e part number

---

## Vincoli progettuali
- Compatibilità geometrica, cicli e temperatura
- Disponibilità valvole e linee del vuoto
- Capienza e disponibilità autoclave
- Stima tempo laminazione e ciclo

---

## Documentazione interna
- Tutti i file `.md` sono aggiornati direttamente nel progetto
- ChatGPT manterrà memoria dei file e ne restituirà versione aggiornata a ogni step
