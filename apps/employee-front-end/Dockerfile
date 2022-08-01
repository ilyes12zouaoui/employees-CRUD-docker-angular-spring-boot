# stage 1
FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod

# stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/employees-front-end /usr/share/nginx/html
EXPOSE 80