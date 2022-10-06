import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/oder';

export default class OrderModel {
  private conn: Pool;

  constructor(connection: Pool) {
    this.conn = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.conn.execute<IOrder[] & RowDataPacket[]>(
      `SELECT Ord.id, userId, JSON_ARRAYAGG(Pr.id) as productsIds FROM Trybesmith.Orders Ord
      JOIN Trybesmith.Products Pr 
      ON Ord.id = Pr.orderId
      GROUP BY Ord.id`,
    );
    return result;
  }
}