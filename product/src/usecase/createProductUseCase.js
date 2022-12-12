const { saveProduct } = require("../repositories/productRepository");
const { randomUUID } = require('crypto');

const createProduct = product => {
    product.productId = randomUUID();
    product.createdDate = new Date().toISOString().substring(0, 10);

    return saveProduct(product);
}

module.exports = { createProduct }