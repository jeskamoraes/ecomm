import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json' assert {type: "json"};
import client from './repositories/databaseClient.js';
import {app} from './app.js';

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, function ()  {
  console.log("Products server is running in port", `${process.env.PORT}`);
  client.authenticate()
  .then(() => { console.log('database connected!') })
  .catch(error => { console.error(error) })
});



