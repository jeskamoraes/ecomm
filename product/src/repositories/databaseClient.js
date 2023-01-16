const Sequelize = require('sequelize');

const client = new Sequelize('mysql://jessica:123456789@mysqldb:3306/products');

module.exports = client;