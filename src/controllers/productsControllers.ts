import { Request, Response } from 'express';
import ProductService from '../services/productsServices';
import 'express-async-errors';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.service.create(product);
    
    res.status(201).json(createdProduct);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const allProducts = await this.service.getAll();
    res.status(200).json(allProducts);
  };
}