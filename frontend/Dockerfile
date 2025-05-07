# Fase 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Installa le dipendenze includendo quelle necessarie per il build
COPY package*.json ./
RUN npm install

# Fase 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copia le dipendenze e i file di configurazione
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Imposta le variabili d'ambiente per il build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Esegui il build
RUN npm run build

# Fase 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Crea un utente non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia i file necessari dal builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Imposta i permessi corretti
RUN chown -R nextjs:nodejs /app

# Imposta l'utente non-root
USER nextjs

# Esponi la porta e avvia l'app
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
