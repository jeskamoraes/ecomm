const { MongoClient } = require('mongodb');
// const products = [];

async function getUsersCollection() {
    const connectionURL = 'mongodb://jessica:123456789@localhost:27017';
    const connection = new MongoClient(connectionURL);
    await connection.connect();
  
    const database = connection.db('ecomm');
    return database.collection('products');
  }

// Função responsável por adicionar os produtos dentro do array
const saveProduct = async product => {
    const collection = await getUsersCollection();
    // products.push(product)
    // Para retornar a lista não é necessário dar return product aqui!
    // Sem o return product não é retornado um produto único (primeiro teste realizado)
    //return product
    await collection.insertOne(product)
}

// Função que não recebe nenhum parâmetro, mas retorna todos os produtos salvos
// const findProducts = () => {
//     const listProducts = products
//     return listProducts;
// }

const findProducts = async () => {
    const collection = await getUsersCollection();
    const products = collection.find().toArray();
    return products;
}

module.exports = { saveProduct, findProducts };