FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080 3000 46656 46657 38885
CMD [ "node", "app.js" ]