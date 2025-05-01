FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /backend

# Копируем только package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь исходный код
COPY . .

# Открываем порт
EXPOSE 5000

# Запускаем приложение
CMD ["npm", "start"]
