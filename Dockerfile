FROM node:latest

ENV IN_IMAGE="true"

WORKDIR /main
COPY package.json /main
RUN npm install
COPY . /main

CMD node ./bin/server.js

EXPOSE 80