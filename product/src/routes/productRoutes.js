import express from 'express';
import { ProductController } from '../controllers/productController.js';
import tokenValidation from '../middlewares/auth.js';

const productRouter = express();

const productController = new ProductController();
productRouter.post('/products/register', tokenValidation, productController.registerProduct);

export { productRouter };