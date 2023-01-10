FROM node:18
WORKDIR /product
COPY package*.json /product/
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT npm start