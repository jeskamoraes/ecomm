import express from 'express';
import bodyParser from 'body-parser';
import { UserController } from './controllers/userController.js';
import { ProductController } from './controllers/productController.js';
import validationToken from './middlewares/auth.js';

const app = express();

app.use(bodyParser.json());

const userController = new UserController();
app.post('/register', userController.registerAccount);
app.post('/token', userController.generateToken);
const productController = new ProductController();
app.post('/products/register', validationToken, productController.registerProduct);
export {app};