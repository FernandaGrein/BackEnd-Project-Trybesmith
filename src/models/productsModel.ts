import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );
    return { id: insertId, name, amount };
  }
}