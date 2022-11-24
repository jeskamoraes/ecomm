FROM node:14
WORKDIR /account
COPY package.json /account/
RUN npm install
COPY . .
CMD ["npm", "start"]