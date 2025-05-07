# 🗂️ Snapshot struttura progetto

- 📍 Root: `C:\Users\Antonio Sasso\Desktop\CarbonPilot`
- 📆 Generato il: `2025-05-07 13:09:06`
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
│       └── nesting.py
├── docker-compose.yml
├── frontend
│   ├── .env.local
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
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
│   ├── eslint.config.mjs
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
│   └── tsconfig.json
└── scan_structure_enhanced.py
```
