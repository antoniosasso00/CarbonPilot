FROM python:3.12-slim

# Installa dipendenze di sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    g++ \
    git \
    cmake \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Imposta la working directory
WORKDIR /app

# Configura pip per usare il mirror di Google
RUN pip config set global.index-url https://pypi.org/simple && \
    pip config set global.extra-index-url https://us-python.pkg.dev/colab-wheels/public/simple/

# Installa le dipendenze Python di base
RUN pip install --no-cache-dir \
    fastapi==0.110.0 \
    uvicorn[standard]==0.29.0 \
    sqlalchemy==2.0.40 \
    pydantic==2.11.4 \
    alembic==1.13.1 \
    psycopg2-binary==2.9.9 \
    fpdf==1.7.2

# Installa ortools separatamente
RUN pip install --no-cache-dir ortools==9.8.3296

# Copia il codice sorgente
COPY . .

# Espone la porta FastAPI
EXPOSE 8000

# Comando per avviare il server
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
