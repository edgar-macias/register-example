FROM node:16.14-alpine
RUN mkdir -p /home/client
WORKDIR /home/client
COPY package*.json /home/client
RUN npm ci
COPY . /home/client
RUN npm run build
