# ===== BUILD STAGE =====
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN npm install
RUN npm run build

# ===== RUNTIME STAGE =====
FROM node:20

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npx", "next", "start", "-H", "0.0.0.0"]
