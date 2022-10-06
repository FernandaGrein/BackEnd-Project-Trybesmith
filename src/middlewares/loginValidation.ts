import { NextFunction, Request, Response } from 'express';
import Ilogin from '../interfaces/login';

function loginValidation(req: Request, res: Response, next: NextFunction) {
  const userLogin: Ilogin = req.body;

  if (!userLogin.username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!userLogin.password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
}

export default loginValidation;