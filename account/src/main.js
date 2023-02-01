const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const app = require('./app.js');
const mongoose = require('mongoose');

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(process.env.PORT, function () {
            console.log("Accounts server is running in port", `${process.env.PORT}`);
        })
    })
    .catch((err) => console.log(err));






