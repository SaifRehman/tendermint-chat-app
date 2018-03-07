FROM node:latest
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000 46656 46657 35597
CMD [ "node", "app.js" ]