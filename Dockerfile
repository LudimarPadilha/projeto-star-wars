# Usar uma imagem base com Node.js
#FROM node:alpine

# Criar e definir o diretório de trabalho
#WORKDIR /app

# Copiar package.json e package-lock.json
#COPY package*.json ./

# Instalar as dependências
#RUN npm install

# Copiar o código fonte para o contêiner
#COPY tsconfig.json ./
#COPY src/ .

# Compilar o TypeScript
#RUN npm run build

# Expor a porta que o app irá usar
#EXPOSE 3001

# Comando para iniciar a aplicação
#CMD ["node", "dist/server.js"]

# Usar uma imagem base com Node.js
FROM node:alpine

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar apenas package.json e package-lock.json
#COPY package*.json ./app
COPY app/package*.json ./ 

# Instalar as dependências
RUN npm install

# Expor a porta que o app irá usar
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "start"]
