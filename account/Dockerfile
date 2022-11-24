FROM node:14
WORKDIR /account
COPY package.json package-lock.json /account/
RUN npm install
COPY . .
CMD ["npm", "start"]