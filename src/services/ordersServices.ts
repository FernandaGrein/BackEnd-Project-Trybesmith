import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { IOrder, INewOrder } from '../interfaces/oder';
import OrderModel from '../models/ordersModel';
import connection from '../models/connection';

const { JWT_SECRET } = process.env;

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    return this.model.getAllOrders();
  }

  public async createOrder(token: string, productsBody: { productsIds: number[]; })
    : Promise<INewOrder> {
    const payload: JwtPayload = jwt.verify(token, JWT_SECRET as Secret) as JwtPayload;

    const { id } = payload;
  
    const { productsIds } = productsBody;
    
    return this.model.createOrder(id, productsIds);
  }
}