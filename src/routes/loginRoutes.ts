import { Router } from 'express';
import LoginController from '../controllers/loginController';

const route = Router();
const loginController = new LoginController();

route.post('/login', loginController.logonUser);

export default route;