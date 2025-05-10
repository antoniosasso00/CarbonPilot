#!/usr/bin/env python
# carbonpilot_manager.py – Diagnostica completa: struttura, modelli, frontend, API, docker

import os
import re
import json
import ast
import subprocess
from datetime import datetime

EXCLUDE_DIRS = {"node_modules", "__pycache__", ".git", ".venv", ".next"}
EXCLUDE_FILES = {".DS_Store"}
OUTPUT_FILENAME = "structure_snapshot.md"

def run(cmd: str, desc: str = ""):
    print(f"\n🛠️  {desc}..." if desc else f"\n$ {cmd}")
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
        print(f"⚠️  Comando fallito: {cmd}")

def confirm(question: str) -> bool:
    reply = input(f"{question} [y/N]: ").strip().lower()
    return reply == "y"

def safe_listdir(path):
    try:
        return sorted(os.listdir(path))
    except FileNotFoundError:
        return []

def scan_directory(path: str, prefix: str = "") -> list[str]:
    lines = []
    entries = safe_listdir(path)
    entries = [e for e in entries if e not in EXCLUDE_DIRS and e not in EXCLUDE_FILES]
    for index, entry in enumerate(entries):
        full_path = os.path.join(path, entry)
        connector = "└── " if index == len(entries) - 1 else "├── "
        lines.append(prefix + connector + entry)
        if os.path.isdir(full_path):
            extension = "    " if index == len(entries) - 1 else "│   "
            lines.extend(scan_directory(full_path, prefix + extension))
    return lines

def parse_pyproject_version(path: str):
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        match = re.search(r'version\s*=\s*["\']([\d\.]+)["\']', content)
        return match.group(1) if match else None
    except FileNotFoundError:
        return None

def parse_package_json(path: str):
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        version = data.get("version", None)
        scripts = list(data.get("scripts", {}).keys())
        return version, scripts
    except FileNotFoundError:
        return None, []

def extract_fastapi_routes(main_path: str):
    routes = []
    try:
        with open(main_path, "r", encoding="utf-8") as f:
            for line in f:
                if "include_router" in line:
                    match = re.search(r'include_router\(([^,]+),\s*prefix="([^"]+)"', line)
                    if match:
                        routes.append(match.group(2))
    except FileNotFoundError:
        pass
    return routes

def extract_registered_routes(routers_dir: str):
    routes = set()
    for filename in safe_listdir(routers_dir):
        if filename.endswith(".py"):
            with open(os.path.join(routers_dir, filename), "r", encoding="utf-8") as f:
                content = f.read()
            matches = re.findall(r'@router\.(get|post|put|delete)\("(/[^"]*)"', content)
            for _, path in matches:
                routes.add(path.strip("/"))
    return routes

def extract_api_endpoints(api_path: str):
    endpoints = set()
    try:
        with open(api_path, "r", encoding="utf-8") as f:
            content = f.read()
        matches = re.findall(r"fetch\(\s*`?/?([^`\"']+)`?", content)
        endpoints.update(matches)
    except FileNotFoundError:
        pass
    return endpoints

def check_api_vs_routes(api_path: str, routers_dir: str):
    output = []
    api_endpoints = extract_api_endpoints(api_path)
    router_endpoints = extract_registered_routes(routers_dir)
    missing = sorted(router_endpoints - api_endpoints)
    extra = sorted(api_endpoints - router_endpoints)
    if missing or extra:
        output.append("## 🔗 Verifica API vs backend")
        for r in missing:
            output.append(f"- `{r}` definito nei router ma non usato in `lib/api.ts`")
        for r in extra:
            output.append(f"- `{r}` usato in `lib/api.ts` ma non definito nei router")
        output.append("")
    return output
def extract_sqlalchemy_fields(model_path: str):
    fields = {}
    try:
        with open(model_path, "r", encoding="utf-8") as f:
            tree = ast.parse(f.read())
        for node in ast.walk(tree):
            if isinstance(node, ast.Assign):
                for t in node.targets:
                    if isinstance(t, ast.Name) and isinstance(node.value, ast.Call):
                        if getattr(node.value.func, 'id', '') == "Column":
                            fields[t.id] = "unknown"
    except:
        pass
    return fields

def extract_pydantic_fields(schema_path: str):
    fields = {}
    try:
        with open(schema_path, "r", encoding="utf-8") as f:
            content = f.read()
        matches = re.findall(r"(\w+):\s+([\w\[\]\|\.]+)", content)
        for name, ftype in matches:
            if name == "Config":
                continue
            fields[name] = ftype
    except:
        pass
    return fields


def check_model_vs_schema(models_dir: str, schemas_dir: str) -> list[str]:
    output = []
    for filename in os.listdir(models_dir):
        if not filename.endswith(".py"):
            continue
        model_path = os.path.join(models_dir, filename)
        schema_path = os.path.join(schemas_dir, filename)
        if not os.path.exists(schema_path):
            continue
        model_fields = extract_sqlalchemy_fields(model_path)
        schema_fields = extract_pydantic_fields(schema_path)
        missing_schema = sorted(set(model_fields) - set(schema_fields))
        missing_model = sorted(set(schema_fields) - set(model_fields))
        if missing_schema or missing_model:
            output.append(f"## 🔄 Confronto `{filename.replace('.py','')}` (Model vs Schema)")
            for f in missing_schema:
                output.append(f"- `{f}` presente nel model ma non nello schema")
            for f in missing_model:
                output.append(f"- `{f}` presente nello schema ma non nel model")
            output.append("")
    return output

def extract_exports(ts_path: str) -> list[str]:
    exports = []
    try:
        with open(ts_path, "r", encoding="utf-8") as f:
            content = f.read()
        pattern = re.compile(r"export (type|interface|const|function|class) (\w+)")
        exports = [match[1] for match in pattern.findall(content)]
    except:
        pass
    return exports

def check_unused_exports(frontend_types: str) -> list[str]:
    report = []
    all_exports = {}
    used_identifiers = set()

    for root, _, files in os.walk(frontend_types):
        for f in files:
            if f.endswith(".ts") or f.endswith(".tsx"):
                full_path = os.path.join(root, f)
                exports = extract_exports(full_path)
                if exports:
                    all_exports[full_path] = exports

    for root, _, files in os.walk(frontend_types):
        for f in files:
            if f.endswith(".ts") or f.endswith(".tsx"):
                try:
                    with open(os.path.join(root, f), "r", encoding="utf-8") as file:
                        content = file.read()
                        for e in all_exports.values():
                            for name in e:
                                if re.search(rf"\b{name}\b", content):
                                    used_identifiers.add(name)
                except:
                    continue

    for path, exports in all_exports.items():
        unused = [e for e in exports if e not in used_identifiers]
        if unused:
            rel = os.path.relpath(path, frontend_types).replace("\\", "/")
            report.append(f"## 📤 Export non usati in `{rel}`")
            for e in unused:
                report.append(f"- `{e}` mai utilizzato")
            report.append("")
    return report

def check_invalid_imports(frontend_pages_dir: str, frontend_types: str) -> list[str]:
    report = []
    declared_exports = set()
    for root, _, files in os.walk(frontend_types):
        for f in files:
            if f.endswith(".ts"):
                path = os.path.join(root, f)
                exports = extract_exports(path)
                declared_exports.update(exports)

    for root, _, files in os.walk(frontend_pages_dir):
        for file in files:
            if not file.endswith(".tsx"):
                continue
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            matches = re.findall(r"import {([^}]+)} from .*", content)
            for match in matches:
                for name in match.split(","):
                    name = name.strip()
                    if name and name not in declared_exports:
                        rel = os.path.relpath(path, frontend_pages_dir).replace("\\", "/")
                        report.append(f"## ❗ Import di simbolo non esportato: `{name}` in `{rel}`")
                        report.append("")
    return report
def find_invalid_usestate_initializations(frontend_pages_dir: str, types_dir: str) -> list[str]:
    report = []
    type_defs = {}
    for file in os.listdir(types_dir):
        if not file.endswith(".ts"):
            continue
        path = os.path.join(types_dir, file)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            matches = re.findall(r"export type (\w+)\s*=\s*{(.*?)};", content, re.DOTALL)
            for name, body in matches:
                fields = re.findall(r"(\w+):", body)
                type_defs[name] = set(fields)

    for root, _, files in os.walk(frontend_pages_dir):
        for file in files:
            if not file.endswith(".tsx"):
                continue
            page_path = os.path.join(root, file)
            with open(page_path, "r", encoding="utf-8") as f:
                content = f.read()
            for match in re.finditer(r"useState<(\w+)>\s*\(\s*{(.*?)}\s*\)", content, re.DOTALL):
                used_type = match.group(1)
                init_block = match.group(2)
                init_fields = set(re.findall(r"(\w+):", init_block))
                expected_fields = type_defs.get(used_type)
                if expected_fields:
                    missing = expected_fields - init_fields
                    if missing:
                        rel_path = os.path.relpath(page_path, frontend_pages_dir).replace("\\", "/")
                        report.append(f"## ❌ useState<{used_type}> incompleto in `{rel_path}`")
                        for m in sorted(missing):
                            report.append(f"- Campo mancante: `{m}`")
                        report.append("")
    return report

def check_handlechange_accepts_undefined(frontend_pages_dir: str) -> list[str]:
    report = []
    for root, _, files in os.walk(frontend_pages_dir):
        for file in files:
            if not file.endswith(".tsx"):
                continue
            full_path = os.path.join(root, file)
            with open(full_path, "r", encoding="utf-8") as f:
                content = f.read()
            if "handleChange" in content and "undefined" in content:
                if re.search(r"const handleChange\s*=\s*\(.*?:\s*keyof .*?,\s*value:\s*(string \| number)\)", content):
                    rel = os.path.relpath(full_path, frontend_pages_dir).replace("\\", "/")
                    report.append(f"## ⚠️ `handleChange` non accetta `undefined` in `{rel}` ma viene usato con esso.")
                    report.append("- Suggerimento: cambia `value: string | number` in `value: string | number | undefined`")
                    report.append("")
    return report

def check_namespace_usage_errors(frontend_pages_dir: str) -> list[str]:
    report = []
    for root, _, files in os.walk(frontend_pages_dir):
        for file in files:
            if not file.endswith(".tsx"):
                continue
            full_path = os.path.join(root, file)
            with open(full_path, "r", encoding="utf-8") as f:
                content = f.read()
            matches = re.findall(r"type\s+\w+\s*=\s*(\w+)\s*&", content)
            for m in matches:
                if re.search(rf"import \* as {m}", content):
                    rel = os.path.relpath(full_path, frontend_pages_dir).replace("\\", "/")
                    report.append(f"## ❌ Namespace `{m}` usato come tipo in `{rel}`")
                    report.append("- ⚠️ Correggi import e usa `import {{ T }} from ...` al posto di `import * as ...`")
                    report.append("")
    return report

def main():
    print(f"🔄 CarbonPilot Diagnostic Manager – {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    root = os.path.abspath(".")
    backend = os.path.join(root, "backend")
    frontend = os.path.join(root, "frontend")
    schemas = os.path.join(backend, "schemas")
    models = os.path.join(backend, "models")
    routers = os.path.join(backend, "routers")
    main_py = os.path.join(backend, "main.py")
    api_ts = os.path.join(frontend, "lib", "api.ts")
    types = os.path.join(frontend, "types")
    pages = os.path.join(frontend, "app")

    lines = [f"# 📊 Diagnostica progetto CarbonPilot"]
    lines.append(f"- 📆 Generato il: `{datetime.now().isoformat(sep=' ', timespec='seconds')}`\n")

    lines.append("## 📁 Struttura progetto")
    lines.append("```")
    lines.extend(scan_directory(root))
    lines.append("```\n")

    lines.extend(check_model_vs_schema(models, schemas))
    lines.extend(check_api_vs_routes(api_ts, routers))
    lines.extend(find_invalid_usestate_initializations(pages, types))
    lines.extend(check_handlechange_accepts_undefined(pages))
    lines.extend(check_namespace_usage_errors(pages))
    lines.extend(check_unused_exports(types))
    lines.extend(check_invalid_imports(pages, types))

    with open(OUTPUT_FILENAME, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n✅ File '{OUTPUT_FILENAME}' aggiornato con successo.\n")

    if confirm("Vuoi generare ed eseguire le migrazioni Alembic?"):
        run("docker compose exec backend alembic revision --autogenerate -m 'Auto sync'", "Generazione migrazione")
        run("docker compose exec backend alembic upgrade head", "Applicazione migrazione")

    if confirm("Vuoi ricompilare e riavviare il progetto in Docker?"):
        run("docker compose down", "Stop servizi")
        run("docker compose up --build -d", "Avvio progetto")

if __name__ == "__main__":
    main()
