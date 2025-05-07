# ===== STAGE 1: BUILD =====
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN npm install
RUN npm run build

RUN echo "📂 Contenuto .next in builder:" && ls -la /app/.next

# ===== STAGE 2: RUNTIME =====
FROM node:20

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

RUN echo "📂 Contenuto .next in runtime:" && ls -la .next

EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0"]
