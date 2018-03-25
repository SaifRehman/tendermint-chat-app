FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY privkey0.json ./
RUN npm install
COPY . .
EXPOSE 46657 46660
CMD [ "node", "node1.js" ]