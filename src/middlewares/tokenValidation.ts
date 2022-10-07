import jwt, { Secret } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import IextendReq from '../interfaces/request';

const { JWT_SECRET } = process.env;

async function tokenValidation(req: IextendReq, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
    
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, JWT_SECRET as Secret);
    // req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default tokenValidation;
