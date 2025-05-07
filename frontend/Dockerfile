FROM node:20

# 1) Imposta directory di lavoro
WORKDIR /app

# 2) Copia i file di configurazione essenziali
COPY tsconfig.json package.json package-lock.json* ./

# 3) Installa le dipendenze
RUN npm install

# 4) Copia il resto del progetto
COPY . .

# 5) Costruzione progetto Next.js
RUN npm run build

# 6) Espone la porta dell'app
EXPOSE 3000

# 7) Comando di avvio
CMD ["npx", "next", "start"]
