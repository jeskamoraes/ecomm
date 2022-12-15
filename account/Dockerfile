FROM node:14
WORKDIR /account
COPY package.json package-lock.json /account/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]