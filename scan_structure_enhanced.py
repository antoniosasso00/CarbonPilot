import os
import json
import re
from datetime import datetime

EXCLUDE_DIRS = {"node_modules", "__pycache__", ".git", ".venv", ".next"}
OUTPUT_FILENAME = "structure_snapshot.md"

def scan_directory(path: str, prefix: str = "") -> list[str]:
    lines = []
    try:
        entries = sorted(e for e in os.listdir(path) if e not in EXCLUDE_DIRS)
    except PermissionError:
        return lines

    for index, entry in enumerate(entries):
        full_path = os.path.join(path, entry)
        connector = "└── " if index == len(entries) - 1 else "├── "
        lines.append(prefix + connector + entry)
        if os.path.isdir(full_path):
            extension = "    " if index == len(entries) - 1 else "│   "
            lines.extend(scan_directory(full_path, prefix + extension))
    return lines

def parse_pyproject_version(path: str) -> str | None:
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r'version\s*=\s*["\']([\d\.]+)["\']', content)
        return match.group(1) if match else None
    except FileNotFoundError:
        return None

def parse_package_json(path: str) -> tuple[str | None, list[str]]:
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        version = data.get("version", None)
        scripts = list(data.get("scripts", {}).keys())
        return version, scripts
    except FileNotFoundError:
        return None, []

def extract_fastapi_routes(main_path: str) -> list[str]:
    routes = []
    try:
        with open(main_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for line in lines:
            if "app.include_router" in line:
                match = re.search(r'include_router\(([\w_\.]+)(?:, *prefix="([^"]+)")?', line)
                if match:
                    route = match.group(2) or "/"
                    routes.append(route)
    except FileNotFoundError:
        pass
    return routes

def main():
    root = os.path.abspath(".")
    backend_path = os.path.join(root, "backend")
    frontend_path = os.path.join(root, "frontend")

    lines = [f"# 🗂️ Snapshot struttura progetto\n"]
    lines.append(f"- 📍 Root: `{root}`")
    lines.append(f"- 📆 Generato il: `{datetime.now().isoformat(sep=' ', timespec='seconds')}`")

    # Versioni
    backend_version = parse_pyproject_version(os.path.join(backend_path, "pyproject.toml"))
    if backend_version:
        lines.append(f"- 🧩 Backend version: `{backend_version}`")

    frontend_version, npm_scripts = parse_package_json(os.path.join(frontend_path, "package.json"))
    if frontend_version:
        lines.append(f"- 🧩 Frontend version: `{frontend_version}`")

    lines.append("")

    # Router FastAPI
    routes = extract_fastapi_routes(os.path.join(backend_path, "main.py"))
    if routes:
        lines.append("## 🔁 Routers FastAPI registrati")
        for r in routes:
            lines.append(f"- `{r}`")
        lines.append("")

    # Script npm
    if npm_scripts:
        lines.append("## 📦 Script disponibili (`frontend/package.json`)")
        for s in npm_scripts:
            lines.append(f"- `{s}`")
        lines.append("")

    # Struttura cartelle
    lines.append("## 📂 Struttura progetto\n```")
    lines.extend(scan_directory(root))
    lines.append("```\n")

    # Scrittura su file
    output_path = os.path.join(root, OUTPUT_FILENAME)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n✅ File '{OUTPUT_FILENAME}' generato con successo in:\n{root}")

if __name__ == "__main__":
    main()
