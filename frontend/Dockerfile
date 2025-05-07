FROM node:20

# 1) Imposta directory di lavoro
WORKDIR /app

# 2) Copia i file di configurazione essenziali (compresi tsconfig/jsconfig)
COPY tsconfig.json package.json package-lock.json* ./

# 3) Installa le dipendenze in modo pulito
RUN npm ci

# 4) Copia il resto del progetto
COPY . .

# 5) Compila il progetto Next.js
RUN npm run build

# 6) Espone la porta di default
EXPOSE 3000

# 7) Comando di avvio
CMD ["npm", "run", "start"]
