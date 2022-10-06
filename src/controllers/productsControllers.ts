import { Request, Response } from 'express';
import ProductService from '../services/productsServices';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.service.create(product);
    
    res.status(201).json(createdProduct);
  };
}