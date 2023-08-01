FROM node:19-alpine

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install