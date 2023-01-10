const { Router } = require('express');
const ProductController = require('../controllers/ProductController')

const router = Router()

// router.post('/products', ProductController.createImage);
// router.get('/products', ProductController.listAllImages);
router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.listAllProducts);

module.exports = router