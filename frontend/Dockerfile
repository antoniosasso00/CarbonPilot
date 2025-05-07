FROM node:20

# Imposta directory di lavoro
WORKDIR /app

# Copia solo package.json e lock
COPY package.json package-lock.json* ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto del progetto
COPY . .

# Compila il progetto Next.js
RUN npm run build

# Espone la porta di default
EXPOSE 3000

# Comando di avvio
CMD ["npm", "run", "start"]
