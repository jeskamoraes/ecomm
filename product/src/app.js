import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controllers/userController.js';
import { ProductController } from './controllers/productController.js';
import tokenValidation from './middlewares/auth.js';
import { productRouter } from './routes/productRoutes.js';
import { userRouter } from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(productRouter)
app.use(userRouter)

export {app};