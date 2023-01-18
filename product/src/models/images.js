import { Model, DataTypes } from "sequelize";
import client from "../repositories/databaseClient.js";
  export class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Images.init({
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize: client,
    modelName: 'Images',
  });

