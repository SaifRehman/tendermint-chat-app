FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 30001 46656 46657 35597 
CMD [ "node", "app.js" ]