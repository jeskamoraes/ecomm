const express = require('express');
const { router } = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const bodyParser = require('body-parser');
const { testConnection } = require('./repositories/productRepository');
const routes = require('./routes/index')

const port = 3000;
const app = express();

// Recebe os dados recebidos via post e converte para json
// app.use(express.json());
app.use(bodyParser.json());
// Realizado durante a sprint 6
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// app.use(router);
routes(app);

testConnection();

app.listen(port, () => {
  console.log(`Products server is running in port ${port}`)
});



