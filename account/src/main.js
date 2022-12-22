import express from 'express';
import { router } from './routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json' assert {type: "json"}; 

// Importante manter a ordem seguida aqui


// Criando instancia do express
const app = express();

app.use(express.json()); // pega o json q vem da requisição e preenche o body com ele, senão o request.body não funciona
// Realizado durante a sprint 6
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);

app.get('/docs', swaggerUi.setup(swaggerDocs));

app.listen(3000, function () {
    console.log("Accounts server is running");
})





