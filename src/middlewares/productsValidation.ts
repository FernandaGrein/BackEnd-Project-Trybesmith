import { NextFunction, Request, Response } from 'express';
import ProductSchema from './schema';

function productsValidation(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const validation = ProductSchema.validate({ name, amount });

  if (validation.error && validation.error?.message.includes('required')) {
    return res.status(400).json({ message: validation.error.message }); 
  }

  if (validation.error) {
    return res.status(422).json({ message: validation.error.message });
  }

  next();
}

export default productsValidation;