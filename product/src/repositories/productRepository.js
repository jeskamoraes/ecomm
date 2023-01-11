const Sequelize = require('sequelize');
// Conexão com o bando de dados
const sequelize = new Sequelize('mysql://root@localhost:3306/db_product');
const products = require('../models/products')(sequelize, Sequelize.DataTypes);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

// const saveProduct = async product => {
//     const createProduct = await products.create(product);
//     return createProduct;
// }

// const findProducts = async () => {
//     const allProducts = await products.findAll();
//     return allProducts;
// }

module.exports = { testConnection };

// Código utilizado quando desenvolvemos apenas com array e depois realizando a conexão com o mongo

// const products = [];

// async function getUsersCollection() {
//     const connectionURL = 'mongodb://jessica:123456789@localhost:27017';
//     const connection = new MongoClient(connectionURL);
//     await connection.connect();
  
//     const database = connection.db('ecomm');
//     return database.collection('products');
//   }

// Função responsável por adicionar os produtos dentro do array
// const saveProduct = async product => {
//     const collection = await getUsersCollection();
//     // products.push(product)
//     // Para retornar a lista não é necessário dar return product aqui!
//     // Sem o return product não é retornado um produto único (primeiro teste realizado)
//     //return product
//     await collection.insertOne(product)
// }

// Função que não recebe nenhum parâmetro, mas retorna todos os produtos salvos
// const findProducts = () => {
//     const listProducts = products
//     return listProducts;
// }

// const findProducts = async () => {
//     const collection = await getUsersCollection();
//     const products = collection.find().toArray();
//     return products;
// }