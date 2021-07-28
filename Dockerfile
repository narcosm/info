# Usar  imagen de nodejs
FROM node:12-alpine
# Crear carpeta de trabajo
RUN mkdir /mi_app
# seleccionar carpeta de trabajo
WORKDIR /mi_app
# copiar archivos de la api
COPY . .
# instalar blibliotecas
RUN npm install
EXPOSE 3001
# ejecutar comando para iniciar el CRON
CMD node app.js