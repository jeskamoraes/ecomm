const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const app = require('./app.js');
const mongoose = require('mongoose');

const userRoutes = require('./controllers/userController');

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

userRoutes(app);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(3000, function () {
            console.log("Accounts server is running iwn port 3000");
        })
    })
    .catch((err) => console.log(err));






