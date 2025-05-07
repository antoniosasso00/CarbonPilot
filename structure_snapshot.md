# 🗂️ Snapshot struttura progetto

- 📍 Root: `C:\Users\Antonio Sasso\Desktop\CarbonPilot`
- 📆 Generato il: `2025-05-07 16:31:42`
- 🧩 Backend version: `0.1.0`
- 🧩 Frontend version: `0.1.0`

## 🔁 Routers FastAPI registrati
- `/parts`
- `/catalog`
- `/autoclaves`
- `/nesting`
- `/schedules`

## 📦 Script disponibili (`frontend/package.json`)
- `dev`
- `build`
- `start`
- `lint`

## 📂 Struttura progetto
```
├── .env
├── .gitignore
├── README.md
├── backend
│   ├── .env
│   ├── Dockerfile
│   ├── README.md
│   ├── __init__.py
│   ├── alembic
│   │   ├── README
│   │   ├── env.py
│   │   ├── script.py.mako
│   │   └── versions
│   ├── alembic.ini
│   ├── crud
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── parts.py
│   │   └── schedules.py
│   ├── main.py
│   ├── models
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── part.py
│   │   └── schedule.py
│   ├── poetry.lock
│   ├── pyproject.toml
│   ├── routers
│   │   ├── autoclaves.py
│   │   ├── catalog_parts.py
│   │   ├── nesting.py
│   │   ├── parts.py
│   │   ├── reports.py
│   │   └── schedules.py
│   ├── schemas
│   │   ├── autoclave.py
│   │   ├── catalog_part.py
│   │   ├── part.py
│   │   └── schedule.py
│   └── services
│       ├── nesting.py
│       └── pdf_report.py
├── docker-compose.yml
├── frontend
│   ├── .env.local
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── app
│   │   ├── autoclaves
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── catalog
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── nesting
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── parts
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── new
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── schedules
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── nesting
│   │   │   └── NestingPreview.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── nesting
│   ├── components.json
│   ├── eslint.config.mjs
│   ├── lib
│   │   └── api.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── src
│   ├── tsconfig.json
│   └── types
│       ├── autoclave.ts
│       ├── catalog_part.ts
│       └── part.ts
├── scan_structure_enhanced.py
└── structure_snapshot.md
```
