import { Model, DataTypes } from "sequelize";
import client from "../repositories/databaseClient.js";
import bcrypt from 'bcryptjs';

export class Users extends Model {
  
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
