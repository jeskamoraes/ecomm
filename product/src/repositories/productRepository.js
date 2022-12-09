const products = [];

// Função responsável por adicionar os produtos dentro do array
const saveProduct = product => {
    products.push(product)
    return product
}

// Função que não recebe nenhum parâmetro, mas retorna todos os produtos salvos
const findProducts = () => products

module.exports = { saveProduct, findProducts };