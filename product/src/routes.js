const { Router } = require('express');
const { createProduct } = require('./usecase/createProductUseCase');
const { listProducts } = require('./usecase/listProductsUseCase');

const router = Router();

router.get('/products', (req, res) => {
    listProducts()
        .then(products => {
            res.status(201).json(products)
        })
        .catch(error => {
            res.status(400).json({ status: 'error', message: error.message });
        });
});

router.post('/products', function (req, res) {

    const product = req.body
    createProduct(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        })
});

module.exports = { router }