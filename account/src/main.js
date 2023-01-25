import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json' assert {type: "json"};
import app from './app.js';

app.get('/docs', swaggerUi.setup(swaggerDocs));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, function () {
    console.log("Accounts server is running in port 3000");
})




