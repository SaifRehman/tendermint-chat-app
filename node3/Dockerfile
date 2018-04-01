FROM node:carbon
WORKDIR /usr/src/app
COPY .env-node3 ./
RUN npm install
COPY . .
EXPOSE 30090 30092
CMD [ "node3.js" ]
