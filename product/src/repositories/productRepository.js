const products = [];

// Função responsável por adicionar os produtos dentro do array
const saveProduct = product => {
    products.push(product)
    // Para retornar a lista não é necessário dar return product aqui!
    // Sem o return product não é retornado um produto único (primeiro teste realizado)
    return product
}

// Função que não recebe nenhum parâmetro, mas retorna todos os produtos salvos
const findProducts = () => products

module.exports = { saveProduct, findProducts };