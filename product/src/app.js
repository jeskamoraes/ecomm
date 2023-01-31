import express from 'express';
import bodyParser from 'body-parser';
import {productRouter} from './routes/productRoutes.js'
import {userRouter} from './routes/userRoutes.js';
import { errors } from 'celebrate';

const app = express();

app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    productRouter,
    userRouter
    );
app.use(errors());

export {app};