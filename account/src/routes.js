const { Router } = require('express');
const UserController = require('./controllers/userController');
const userValidations = require('./schemas/usersSchema');

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userValidations, userController.registerAccount);
userRouter.post('/token', userController.generateToken);
