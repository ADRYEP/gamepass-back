FROM node:latest

# Create app directory
WORKDIR /usr/src/

COPY package*.json ./
COPY ./src ./src

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]