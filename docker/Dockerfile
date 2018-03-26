FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY privkey0.json ./
RUN npm install
COPY . .
<<<<<<< HEAD
EXPOSE 46660, 46657
CMD [ "node", "app.js" ]
=======
EXPOSE 46657 46660
CMD [ "node", "node1.js" ]
>>>>>>> 90f0fcef1977b04052750ec71f2ec6f64b208386
