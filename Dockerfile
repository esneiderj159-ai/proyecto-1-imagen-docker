# Imagen base liviana (Alpine) con versión fija del tag
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo package.json primero (mejor cache de capas)
COPY package.json ./

# Instalar dependencias de producción
RUN npm install --omit=dev

# Copiar el código fuente
COPY src/ ./src/

# Puerto que expone la aplicación
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
