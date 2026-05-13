FROM node:24-alpine

WORKDIR /app

COPY backend-express/package*.json .

RUN npm install

COPY backend-express .

CMD ["npm", "run", "dev"]