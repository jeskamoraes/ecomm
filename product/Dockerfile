FROM node
WORKDIR /app
COPY package.json package-lock.json /app/
EXPOSE 3001
RUN npm install
COPY . .
ENTRYPOINT ["npm", "start"]