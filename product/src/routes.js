import { Router } from 'express';
import { createProduct } from './usecase/createProductUseCase.js';
import { listProducts } from'./usecase/listProductsUseCase.js';

const router = Router();

router.get('/products', (req, res) => {
    listProducts()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(500).json({ status: 'error', message: error.message });
        });
});

router.post('/products', (req, res) => {
    const product = req.body
    createProduct(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ message: error.message });
        })
});

export { router };