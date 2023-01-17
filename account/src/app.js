import express from 'express';
import router from './routes.js';

const app = express();

app.use(express.json()); // pega o json q vem da requisição e preenche o body com ele, senão o request.body não funciona
// Realizado durante a sprint 6

app.use(router);

export default app;