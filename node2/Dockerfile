FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY privkey1.json ./
COPY .env-node2 ./
COPY www ./
RUN npm install
COPY . .
EXPOSE 30090 30092 7777
CMD [ "node", "node2.js" ]
