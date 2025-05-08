# Script di configurazione ambiente di sviluppo CarbonPilot
Write-Host "🚀 Configurazione ambiente di sviluppo CarbonPilot" -ForegroundColor Green

# Verifica installazione Python
$pythonPath = "C:\Users\Anton\AppData\Local\Programs\Python\Python312\python.exe"
if (-not (Test-Path $pythonPath)) {
    Write-Host "⚠️ Python 3.12 non trovato, installazione in corso..." -ForegroundColor Yellow
    winget install Python.Python.3.12
} else {
    Write-Host "✅ Python 3.12 già installato" -ForegroundColor Green
}

# Configura PATH
$pythonDir = "C:\Users\Anton\AppData\Local\Programs\Python\Python312"
$env:Path = "$pythonDir;$pythonDir\Scripts;" + $env:Path

# Installa Poetry
Write-Host "🔧 Installazione Poetry..." -ForegroundColor Yellow
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | python -

# Configura Poetry per usare il Python corretto
poetry env use $pythonPath

# Rigenera poetry.lock
Set-Location backend
Write-Host "📦 Rigenerazione poetry.lock..." -ForegroundColor Yellow
poetry lock --no-update

# Build e avvio Docker
Write-Host "🐳 Build e avvio container Docker..." -ForegroundColor Yellow
docker compose build backend
docker compose up -d backend

Write-Host "✨ Setup completato! Verifica http://localhost:8000/docs" -ForegroundColor Green 