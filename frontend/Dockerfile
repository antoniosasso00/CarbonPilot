FROM node:20

WORKDIR /app

# 1. Copia package e lock
COPY package.json package-lock.json* ./

# 2. Installa dipendenze
RUN npm install

# 3. Copia TUTTO il resto del progetto (dopo aver installato)
COPY . .

# 4. Costruisci progetto Next.js
RUN npm run build

# 5. Espone la porta
EXPOSE 3000

# 6. Avvia server in produzione
CMD ["npx", "next", "start", "-H", "0.0.0.0"]
