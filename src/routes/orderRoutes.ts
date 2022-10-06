import { Router } from 'express';
import OrderController from '../controllers/ordersController';

const route = Router();
const ordersController = new OrderController();

route.get('/orders', ordersController.getAllOrdes);

export default route;