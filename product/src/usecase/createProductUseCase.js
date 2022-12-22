const { saveProduct } = require("../repositories/productRepository");
const { randomUUID } = require('crypto');

const createProduct = async product => {
    id = randomUUID();
    createdDate = new Date().toISOString().substring(0, 10);
    const createProduct = { id, createdDate, ...product }

    await saveProduct(product);
    return createProduct; 
}

module.exports = { createProduct }