FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY privkey1.json ./
COPY .env-node2 ./
RUN npm install
COPY . .
EXPOSE 30090 30092
CMD [ "node", "node2.js" ]
