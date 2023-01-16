import { Model, DataTypes } from "sequelize";
import client from "../repositories/databaseClient.js";
import { Features } from "../models/features.js";
import { Images } from "../models/images.js";
   export class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Products.init({
    name: DataTypes.STRING,
    value: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize: client,
    modelName: 'Products',
  });

  Products.Images = Products.hasMany(Images, {
    foreignKey: 'product_id',
    as: 'images'
  });
  
   Products.Features = Products.hasMany(Features, {
    foreignKey: 'product_id',
    as: 'features'
  });
  
  Images.belongsTo(Products, {
    foreignKey: 'id',
  });
  
  Features.belongsTo(Products, {
    foreignKey: 'id',
  });
