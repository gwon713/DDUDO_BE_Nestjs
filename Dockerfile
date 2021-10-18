FROM node:14.17.4
RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]