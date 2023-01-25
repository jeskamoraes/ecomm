import express from 'express';
import { UserController } from '../controllers/userController.js';

const userRouter = express();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);
userRouter.post('/token', userController.generateToken);

export { userRouter };