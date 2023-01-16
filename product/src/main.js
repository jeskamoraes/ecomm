import express from 'express';
import { router } from './routes.js';
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocs = require('./swagger.json');
import bodyParser from 'body-parser';
import client from './repositories/databaseClient.js';

const port = 3001;
const app = express();

// Recebe os dados recebidos via post e converte para json
// app.use(express.json());
app.use(bodyParser.json());
// Realizado durante a sprint 6
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// app.use(router);
app.use(router);

app.listen(port, () => {
  console.log(`Products server is running in port ${port}`);
  client.authenticate()
  .then(() => { console.log('database connected!') })
  .catch(error => { console.error(error) })
});



