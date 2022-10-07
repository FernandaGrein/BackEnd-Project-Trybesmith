import { Request, Response } from 'express';
import OrderService from '../services/ordersServices';
import 'express-async-errors';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrdes = async (_req: Request, res: Response) => {
    const allOrders = await this.service.getAllOrders();
    return res.status(200).json(allOrders);
  };

  public createOrder = async (req: Request, res: Response) => { // IextendReq
    // const { user } = req;
    // const { id } = user;
    const productsIds = req.body;
    // console.log(user, '---------xxxxxxx');
    const token: string = req.headers.authorization as string;
  
    const newOrder = await this.service.createOrder(token, productsIds);
    return res.status(201).json(newOrder);
  };
}