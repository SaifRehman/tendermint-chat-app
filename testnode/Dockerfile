FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env-node3 ./
COPY node3.js ./
RUN npm install
COPY . .
EXPOSE 30090 30092
CMD [ "node", "node3.js" ]
