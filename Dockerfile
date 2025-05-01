FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM node:18-alpine AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

FROM nginx:alpine
RUN apk add --no-cache nodejs npm

COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html
COPY --from=backend-build /app/backend /app/backend
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app/backend

RUN npm install

EXPOSE 80

CMD ["sh", "-c", "node index.js & nginx -g 'daemon off;'"]
