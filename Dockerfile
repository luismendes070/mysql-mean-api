FROM node:latest as angular

WORKDIR /usr/src/app
COPY package*.json /code/package.json

RUN npm install "@angular/animations": "10.1.6",
        "@angular/cdk": "^10.2.7",
        "@angular/common": "10.1.6",
        "@angular/compiler": "^11.0.2",
        "@angular/core": "10.1.6",
        "@angular/fire": "^6.1.1",
        "@angular/forms": "10.1.6",
        "@angular/material": "^10.2.7",
        "@angular/platform-browser": "10.1.6",
        "@angular/platform-browser-dynamic": "10.1.6",
        "@angular/platform-server": "~10.1.1",
        "@angular/router": "10.1.6",
        "@angular/service-worker": "~10.1.1",
        "@angular/upgrade": "^2.4.10",
        "@capacitor-community/electron": "^1.3.2",
        "@capacitor/android": "^2.4.3",
        "@capacitor/core": "2.4.2",
        "@capacitor/ios": "^2.4.3",
        "@ionic-native/core": "^5.30.0",
        "@ionic-native/firebase": "^5.30.0",
        "@ionic-native/foreground-service": "^5.30.0",
        "@ionic-native/intel-security": "^5.30.0",
        "@ionic-native/ionic-webview": "^5.30.0",
        "@ionic/pwa-elements": "^3.0.1",
        "@ngrx/component": "^10.0.1",
        "@ngrx/data": "^10.0.1",
        "@ngrx/effects": "^10.0.1",
        "@ngrx/entity": "^10.0.1",
        "@ngrx/store": "^10.0.1",
        "@ngtools/webpack": "^10.2.0",
        "@nguniversal/express-engine": "^10.1.0",
        "@ngx-formly/core": "^5.10.6",
        "@ngx-formly/material": "^5.10.6",
        "@ngx-formly/schematics": "^5.10.6",
        "@types/mocha": "^8.0.4",
        "@types/webpack-env": "^1.15.3",
        "angular-in-memory-web-api": "0.11.0",
        "base64-url": "^2.3.3",
        "body-parser": "^1.19.0",
        "clean-webpack-plugin": "^3.0.0",
        "cookie-parser": "^1.4.5",
        "cordova-plugin-ionic-webview": "^5.0.0",
        "core-js": "^3.7.0",
        "cors": "^2.8.5",
        "csurf": "^1.11.0",
        "debug": "^4.3.1",
        "express": "^4.17.1",
        "firebase": "^8.1.1",
        "fresh": "^0.5.2",
        "install-peers": "^1.0.3",
        "ionic-angular": "^3.9.10",
        "jasmine-core": "3.6.0",
        "jasmine-marbles": "0.6.0",
        "lodash": "^4.17.20",
        "material-design-lite": "^1.3.0",
        "moment": "^2.29.1",
        "moment-locales-webpack-plugin": "^1.2.0",
        "mysql": "^2.18.1",
        "negotiator": "^0.6.2",
        "ng2f-bootstrap": "0.0.4",
        "ng2f-server": "^0.2.4",
        "ngf-server": "^1.0.2",
        "node-fetch": "^2.6.1",
        "node-forge": "^0.10.0",
        "postcss": "^8.1.8",
        "pug": "^3.0.0",
        "reflect-metadata": "^0.1.3",
        "restify": "^8.5.1",
        "rxjs": "6.6.3",
        "service": "^0.1.4",
        "swagger-ui": "^3.37.0",
        "systemjs": "^0.19.47",
        "tapable": "^2.1.1",
        "tappable": "^1.1.0",
        "tslib": "2.0.3",
        "uuid": "^8.3.1",
        "wait-port": "^0.2.9",
        "yargs-parser": "^20.2.4",
        "zone.js": "0.10.3"

COPY . .
RUN NPM run build

# Specify port app runs on
EXPOSE 3000

# docs
FROM nginx
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY content /usr/share/nginx/html
COPY conf /etc/nginx

#Grab the latest alpine image
FROM alpine:latest



# Install python and pip
RUN apk add --no-cache --update python3 py3-pip bash
ADD ./webapp/requirements.txt /tmp/requirements.txt

# Install dependencies
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# Add our code
ADD ./webapp /opt/webapp/
WORKDIR /opt/webapp

# Expose is NOT supported by Heroku
# EXPOSE 5000 		

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD gunicorn --bind 0.0.0.0:$PORT wsgi 






