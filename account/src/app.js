const express = require('express');
const userRouter = require('./routes')

const app = express();

app.use(express.json(),
        userRouter
        );

module.exports = app;