FROM node:18-alpine3.16

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ./frontend ./

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]