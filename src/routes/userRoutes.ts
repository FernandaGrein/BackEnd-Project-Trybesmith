import { Router } from 'express';
import UserController from '../controllers/userController';
import userValidation from '../middlewares/userValidation';

const route = Router();
const userController = new UserController();

route.post('/users', userValidation, userController.create);

export default route;