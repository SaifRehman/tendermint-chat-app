FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY privkey0.json ./
COPY .env-node1 ./
COPY www ./
RUN npm install
COPY . .
EXPOSE 30090 30092 7777
CMD [ "node", "node1.js" ]
