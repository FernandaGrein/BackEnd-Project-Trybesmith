import { Router } from 'express';
import LoginController from '../controllers/loginController';
import loginValidation from '../middlewares/loginValidation';

const route = Router();
const loginController = new LoginController();

route.post('/login', loginValidation, loginController.logonUser);

export default route;