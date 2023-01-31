const express = require('express');
const userRouter = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(express.json(),
        userRouter
);

app.use(errors());

module.exports = app;