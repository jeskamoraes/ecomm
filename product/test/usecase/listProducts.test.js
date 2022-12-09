const { createProduct } = require("../../src/usecase/createProductUseCase")
const { findProducts } = require("../../src/usecase/listProductsUseCase")
const { randomUUID } = require('crypto');

const listProducts = () => {
    return findProducts()
 }

console.log("Lista vazia: ", listProducts())

for(let i = 0; i < 10; i++) {
    const product = {
        userId: randomUUID(),
        name: `product ${i+1}`,
        value: `$ ${1000+(i+1)}`,
        quantity: i+1,
        description: `description ${i+1}`,
        category: `category ${i+1}`,
        features: [{name: `name ${i+1}`, description: `description ${i+1}`,}],
        images: [{url: `url ${i+1}`, description: `description ${i+1}`,}]
    }
    createProduct(product)
}

const productList = listProducts()

// console.log(JSON.stringify(productList, null, 4))
console.dir(productList, { depth: null })