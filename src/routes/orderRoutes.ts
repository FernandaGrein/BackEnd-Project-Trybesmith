import { Router } from 'express';
import OrderController from '../controllers/ordersController';
import tokenValidation from '../middlewares/tokenValidation';
import OrdersValidation from '../middlewares/ordersValidation';

const route = Router();
const ordersController = new OrderController();

route.get('/orders', ordersController.getAllOrdes);
route.post('/orders', tokenValidation, OrdersValidation, ordersController.createOrder);

export default route;