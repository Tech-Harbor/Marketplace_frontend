FROM node:20.9

WORKDIR /app

COPY . /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]