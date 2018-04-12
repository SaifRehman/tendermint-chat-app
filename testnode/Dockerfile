FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env-node3 ./
COPY node3.js ./
COPY www ./
RUN npm install
COPY . .
EXPOSE 30098 30099 7777
CMD [ "node", "node3.js" ]
