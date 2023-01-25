import { Model, DataTypes } from "sequelize";
import client from "../repositories/databaseClient.js";
import bcrypt from 'bcryptjs';

export class Users extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Users.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  product_id: DataTypes.INTEGER
},
  {
    sequelize: client,
    modelName: 'Users',
  });

// // Hooks
// Users.addHook('beforeSave', async user => {
//   const hash = await bcrypt.hash(user.password, 10);
//   user.password = hash;
// });

