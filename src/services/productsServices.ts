import Product from '../interfaces/products';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getAll(): Promise<Product[]> {
    return this.model.getAllProducts();
  }
}