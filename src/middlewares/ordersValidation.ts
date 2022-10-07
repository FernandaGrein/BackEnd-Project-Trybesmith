import { NextFunction, Request, Response } from 'express';
import { OrdersSchema } from './schema';

function OrdersValidation(req: Request, res: Response, next:NextFunction) {
  const { productsIds } = req.body;
  const validation = OrdersSchema.validate({ productsIds });
  
  if (validation.error && validation.error.message.includes('required')) {
    return res.status(400).json({ message: validation.error.message });
  }
  if (validation.error) {
    return res.status(422).json({ message: validation.error.message });
  }
  next();
}

export default OrdersValidation;