FROM node:14
WORKDIR /product
COPY package.json package-lock.json /product/
RUN npm install
COPY . .
CMD ["npm", "start"]