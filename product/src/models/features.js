import { Model, DataTypes } from "sequelize";
import client from "../repositories/databaseClient.js";
export class Features extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {

  }
}
Features.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  product_id: DataTypes.INTEGER,
}, {
  sequelize: client,
  modelName: 'Features',
});
