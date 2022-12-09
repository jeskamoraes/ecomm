const { createProduct} = require("../../src/usecase/createProductUseCase")
const { randomUUID } = require('crypto');

const product = {
    userId: randomUUID(),
    name: "product",
    value: 1000,
    quantity: 1,
    description: "description",
    category: "category",
    features: [{ name: "name", description: "description", }],
    images: [{ url: "url", description: "description", }]
}

 
const productCreated = createProduct(product)
console.log(productCreated)

// for(let i = 0; i < 10; i++) {
//     const product = {
//         name: `name ${i+1}`
//     }
//     createProduct(product)
// }

// const productList = listProducts()

// console.log(productList)