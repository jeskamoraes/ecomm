import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// Importante manter a ordem seguida aqui

db.on("error", console.log.bind(console, 'Erro de conexão!'));
db.once("open", () => {
  console.log("Conectado ao banco com sucesso!");
});
// Criando instancia do express
const app = express();
app.use(express.json()); // pega o json q vem da requisição e preenche o body com ele, senão o request.body não funciona

// Redirecionando rotas
routes(app);

app.listen(3000, function () {
    console.log("accounts server is running");
})

