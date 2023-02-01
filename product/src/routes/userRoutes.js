import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';

const userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);
userRouter.post('/token', userController.generateToken);

export { userRouter };