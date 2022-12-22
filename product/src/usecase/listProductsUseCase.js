const { findProducts } = require("../repositories/productRepository")

// Utilizando a findProducts para retornar uma lista com todos os produtos salvos
const listProducts = async () => {
    const products = await findProducts();
    return products;
}

module.exports = { listProducts }