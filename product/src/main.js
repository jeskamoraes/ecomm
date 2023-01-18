// const swaggerUi = require('swagger-ui-express');
// const swaggerDocs = require('./swagger.json');
import client from './repositories/databaseClient.js';
import {app} from './app.js';

const port = 3001;
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Products server is running in port ${port}`);
  client.authenticate()
  .then(() => { console.log('database connected!') })
  .catch(error => { console.error(error) })
});



