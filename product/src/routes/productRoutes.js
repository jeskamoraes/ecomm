import { Router } from 'express';
import { ProductController } from '../controllers/ProductController.js';
import tokenValidation from '../middlewares/auth.js';

const productRouter = Router();

const productController = new ProductController();
productRouter.post('/products/register', tokenValidation, productController.registerProduct);
productRouter.get('/products', productController.listAllProducts);

export { productRouter };