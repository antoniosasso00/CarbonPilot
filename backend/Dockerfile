FROM python:3.12-slim

# Installa le dipendenze di sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Imposta la directory di lavoro
WORKDIR /app

# Configura pip
RUN pip config set global.index-url https://pypi.org/simple && \
    pip config set global.trusted-host pypi.org

# Installa le dipendenze Python
RUN pip install --no-cache-dir \
    fastapi==0.110.0 \
    uvicorn[standard]==0.27.1 \
    sqlalchemy==2.0.27 \
    psycopg2-binary==2.9.9 \
    pydantic==2.6.1 \
    python-multipart==0.0.9 \
    python-jose[cryptography]==3.3.0 \
    passlib[bcrypt]==1.7.4 \
    python-dotenv==1.0.1 \
    alembic==1.13.1 \
    fpdf==1.7.2


# Installa OR-Tools
RUN pip install --no-cache-dir ortools==9.8.3296

# Copia il codice dell'applicazione
COPY . .

# Esponi la porta
EXPOSE 8000

# Avvia l'applicazione
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
