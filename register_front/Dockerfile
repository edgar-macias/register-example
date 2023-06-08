FROM node:16.14-alpine
RUN mkdir -p /home/client
WORKDIR /home/client
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
