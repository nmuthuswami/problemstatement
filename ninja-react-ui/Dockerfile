FROM node:alpine

WORKDIR /usr/src/japp

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY package.json ./

COPY package-lock.json ./

COPY . ./

CMD ["npm","start"]