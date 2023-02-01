const { Router } = require('express');
const UserController = require('./controllers/userController');

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);
userRouter.post('/token', userController.generateToken);
