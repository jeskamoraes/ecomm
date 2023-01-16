import Sequelize from 'sequelize';

const client = new Sequelize('mysql://jessica:123456789@mysqldb:3306/products');

export default client;