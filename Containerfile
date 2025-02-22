FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY prisma ./prisma

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 3000
EXPOSE 5555

CMD ["node", "dist/server.js"]
