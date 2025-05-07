FROM node:18-alpine AS frontend-build
WORKDIR /app
COPY frontend/package.json ./frontend/
RUN cd frontend && npm install
COPY frontend ./frontend
RUN cd frontend && npm run build

FROM node:18-alpine AS backend-build
WORKDIR /app
COPY backend/package.json ./backend/
RUN cd backend && npm install
COPY backend ./backend

FROM nginx:alpine
RUN apk add --no-cache nodejs npm

COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html
COPY --from=backend-build /app/backend /app/backend
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /app/backend

RUN echo "Содержимое /usr/share/nginx/html:" && ls -la /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "-c", "node api.js & nginx -g 'daemon off;'"]