# 🛠 Roadmap di Sviluppo – CarbonPilot

Questa roadmap integra sia il piano iniziale che l’avanzamento attuale (maggio 2025), guidando passo dopo passo il rilascio dell’MVP.

---

## ✅ Milestone `v0.1.0` – Raggiunta il 2025-05-08
- Inizializzazione repository e struttura base completata
- Backend FastAPI + SQLAlchemy + Alembic pienamente operativo
- Modelli core creati: `Part`, `CatalogPart`, `Autoclave`, `Schedule`
- API REST modulari (`/parts`, `/catalog`, `/autoclaves`, `/schedules`)
- Frontend con Next.js App Router + TailwindCSS
- Integrazione `react-big-calendar`
- Docker Compose funzionante (frontend, backend, db)
- Roadmap unificata, versionamento attivo

---

## 🔧 Obiettivi `v0.2.0` (fase attuale)

### Integrazione API reali con UI
- [ ] Connessione API `/parts` ↔ frontend
- [ ] Completare pagina `/parts`: elenco, creazione, modifica
- [ ] Completare pagina `/schedules`: calendario, inserimento pianificazione
- [ ] Integrazione real-time dati da DB → UI

---

## 🧠 Step successivi

### 🔄 Nesting intelligente (OR-Tools)
- [ ] Integrazione algoritmo nesting automatico
- [ ] API `/nesting/` + preview layout
- [ ] Interfaccia nesting manuale

### 📅 Scheduling avanzato
- [ ] Visualizzazione disponibilità autoclavi
- [ ] Drag & drop pianificazione nesting
- [ ] Gestione vincoli: slot, temperatura, valvole

### 🧾 Reportistica PDF
- [ ] Generazione layout PDF giornaliero
- [ ] Download + firma manuale
- [ ] Archiviazione report passati

### 🧪 Test e rilascio finale
- [ ] Test end-to-end in Docker
- [ ] Ottimizzazione frontend (lazy loading, bundle)
- [ ] Accessibilità UI + branding
- [ ] Tag `v1.0.0` per rilascio reparto

---

## 📌 Obiettivo finale
Rilasciare versione **v1.0.0** completamente operativa **entro il 30 giugno 2025**, pronta per utilizzo stabile in ambiente di produzione.

