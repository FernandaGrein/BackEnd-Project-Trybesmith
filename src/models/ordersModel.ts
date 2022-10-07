import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IOrder, INewOrder } from '../interfaces/oder';

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

  public async createOrder(id:number, productsIds: number[]): Promise<INewOrder> {
    const [{ insertId }] = await this.conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)', 
      [id],
    );
    
    const update = productsIds.map((item) => this.conn.execute(`UPDATE Trybesmith.Products
      SET orderId = ? WHERE id = ?`, [insertId, item]));
    
    await Promise.all(update);
    return { userId: id, productsIds };
  }
}