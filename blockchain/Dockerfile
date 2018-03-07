FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001 46656 46657 35597 
CMD [ "node", "app.js" ]