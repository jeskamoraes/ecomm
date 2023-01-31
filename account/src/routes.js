const { Router } = require('express');
const UserController = require('./controllers/userController');
const userValidations = require('./schemas/usersSchema');
const { validate } = require('express-validation')

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', validate(userValidations.createOrUpdateValidator), userController.registerAccount);
userRouter.post('/token', userController.generateToken);
