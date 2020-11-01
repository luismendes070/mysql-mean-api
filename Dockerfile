FROM node:latest as angular
WORKDIR /app
COPY package.json /code/package.json
RUN npm install --silent
COPY . .
RUN NPM run build

FROM nginx
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY content /usr/share/nginx/html
COPY conf /etc/nginx


