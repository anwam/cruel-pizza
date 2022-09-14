FROM node:16-alpine as base 
RUN corepack enable

FROM base as deps 
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM caddy:2-alpine as runner
COPY --from=builder /app/dist/ /usr/share/caddy/