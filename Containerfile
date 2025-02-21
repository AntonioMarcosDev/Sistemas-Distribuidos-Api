FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 8080
EXPOSE 5555

CMD ["node", "dist/server.js"]
