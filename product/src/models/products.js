'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    featurename: DataTypes.STRING,
    featuredescription: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    imagedescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};