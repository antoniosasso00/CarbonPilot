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


## [v0.3.0] - 2025-05-08

### Added
- Endpoint `POST /nesting` con ottimizzazione layout via Google OR-Tools
- Persistenza completa layout e piazzamenti in DB PostgreSQL
- Endpoint `GET /nesting` con join su `Part` e `Autoclave`
- Endpoint `POST /nesting/report` per generazione PDF con `reportlab`
- Componente `NestingPreview` con rendering SVG e download PDF
- Pagina frontend `/nesting` con autoclave, selezione parti, e anteprima

### Changed
- `downloadNestingPDF()` ora invia solo `layout_id` al backend
- Refactor preview layout per supporto completo a oggetti `NestingResult`

### Fixed
- Corretto bug su import Alembic (`db` vs `database`)
- Risolto errore inizializzazione path Alembic

## [v0.4.0] - 2025-05-10
### Modifiche
- Allineati tipi TypeScript (`autoclave`, `part`, `catalog_part`, `schedule`) ai modelli backend
- Migliorata coerenza e robustezza nella generazione snapshot e sincronizzazione
- Aggiunto supporto `--auto` e `--force` in `sync_project.py`
- Pulizia automatica dei form JSX non allineati ai tipi definiti

### [2024-03-21 - Script di Seed per Test]
- Creato nuovo script `backend/scripts/seed_test_data.py` per popolare il database con dati di test
- Implementati i seguenti dati:
  - 2 CureCycle (standard e rapido)
  - 2 CatalogPart (pannello standard e large)
  - 5 Part con stati e dimensioni diverse
  - 2 Autoclave con configurazioni diverse
  - 1 NestingLayout con 3 placements
  - 1 NestingResult
  - 1 Schedule
- Aggiunte relazioni tra entità:
  - Cicli di cura supportati per ogni autoclave
  - Parti associate ai cataloghi
  - Layout di nesting con posizionamenti
  - Schedule con parti e autoclave
