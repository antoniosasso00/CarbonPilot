# Changelog – CarbonPilot

Tutte le modifiche significative sono tracciate secondo [Semantic Versioning](https://semver.org/).

---

## [v0.1.0] – 2025-05-08
### Milestone: Struttura base completa
- Backend FastAPI completo con SQLAlchemy + Pydantic
- Modelli principali: `Part`, `CatalogPart`, `Autoclave`, `Schedule`
- API REST modulari create
- Frontend Next.js con layout App Router e TailwindCSS
- Calendario interattivo con `react-big-calendar`
- Docker Compose stabile per tutto lo stack
- Roadmap e regole progetto aggiornate

## [v0.2.0] - 2025-05-08

### Added
- Pagina `/parts` con elenco, creazione e modifica parti
- Pagina `/schedules` con calendario e creazione pianificazione
- Pagina `/autoclaves` con elenco e form nuova autoclave
- Gestione API centralizzate in `lib/api.ts` per tutte le entità
- Tipizzazioni complete in `types/part.ts`, `schedule.ts`, `autoclave.ts`

### Changed
- Tabella elenco parti estesa con dimensioni e codice ciclo
- Refactoring API `getParts` / `getSchedules` / `getAutoclaves` con hook `useEffect`

### Fixed
- Corretto comportamento UI in caso di errore fetch
