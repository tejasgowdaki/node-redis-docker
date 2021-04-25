FROM node:alpine

WORKDIR /home/visits

COPY ./package*.json ./

RUN npm install --silent

COPY ./ ./

RUN npm install

CMD ["npm", "start"]