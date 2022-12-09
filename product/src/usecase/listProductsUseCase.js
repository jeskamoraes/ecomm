const { findProducts } = require("../repositories/productRepository")

// Utilizando a findProducts para retornar uma lista com todos os produtos salvos
findProducts()

module.exports = { findProducts }