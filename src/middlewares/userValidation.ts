import { Request, Response, NextFunction } from 'express';
import { UserSchema } from './schema';

function userValidation(req: Request, res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;
  const validation = UserSchema.validate({ username, classe, level, password });

  if (validation.error && validation.error.message.includes('required')) {
    return res.status(400).json({ message: validation.error.message });
  }
  if (validation.error) {
    return res.status(422).json({ message: validation.error.message });
  }
  next();
}

export default userValidation;