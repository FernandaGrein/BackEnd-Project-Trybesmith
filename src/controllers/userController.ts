import { Request, Response } from 'express';
import UserServices from '../services/userServices';
import 'express-async-errors';

export default class UserController {
  private service: UserServices;

  constructor() {
    this.service = new UserServices();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.service.createUser(user);

    res.status(201).json({ token });
  };
}