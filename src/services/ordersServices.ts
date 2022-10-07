import { IOrder } from '../interfaces/oder';
import OrderModel from '../models/ordersModel';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    return this.model.getAllOrders();
  }
}