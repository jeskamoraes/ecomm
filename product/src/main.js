const express = require('express');
const { router } = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json')

const port = 3000;
const app = express();

app.use(express.json());
// Sprint 6
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);

app.listen(port, () => {
  console.log(`Products server is running in port ${port}`)
});



