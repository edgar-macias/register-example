FROM node:16.14-alpine
RUN mkdir -p /home/api
WORKDIR /home/api
COPY package*.json /home/api
RUN npm ci
COPY . /home/api
RUN npm run build