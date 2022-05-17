#!/usr/bin/env bash
FROM node:latest
WORKDIR /usr/src/app
# Copy the package.json file
COPY package*.json ./
RUN npm install
# Copy the application into the container
COPY . .
EXPOSE 3004
CMD [ "node", "server.js" ]
