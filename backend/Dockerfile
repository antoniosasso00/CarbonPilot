FROM python:3.11-slim

# Installa dipendenze di sistema
RUN apt-get update && apt-get install -y build-essential

# Imposta la working directory
WORKDIR /app

# Installa Poetry globalmente
RUN pip install poetry

# Copia i file di configurazione
COPY pyproject.toml poetry.lock ./

# Disabilita virtualenv e installa
RUN poetry config virtualenvs.create false \
  && poetry install --no-interaction --no-ansi

# Copia il codice sorgente
COPY . .

# Espone la porta FastAPI
EXPOSE 8000

# Comando per avviare il server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
