# === STAGE 1: build ===
FROM node:20 AS builder

WORKDIR /app

# Copia i file necessari
COPY package*.json ./
COPY tsconfig.json ./
COPY . .

# Installa dipendenze e builda
RUN npm install
RUN npm run build

# === STAGE 2: runtime ===
FROM node:20-alpine

WORKDIR /app

# Copia solo i file necessari per il runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Espone la porta di Next.js
EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0"]
