import { Request, Response } from 'express';
import OrderService from '../services/ordersServices';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAllOrdes = async (_req: Request, res: Response) => {
    const allOrders = await this.service.getAllOrders();
    res.status(200).json(allOrders);
  };
}