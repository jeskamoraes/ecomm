const { findProducts } = require("../repositories/productRepository")

// Utilizando a findProducts para retornar uma lista com todos os produtos salvos
const listProducts = () => {
    return findProducts()
}

module.exports = { listProducts }