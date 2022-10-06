import { Router } from 'express';
import UserController from '../controllers/userController';

const route = Router();
const userController = new UserController();

route.post('/users', userController.create);

export default route;