import { Request, Response } from 'express';
import LoginService from '../services/loginServices';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public logonUser = async (req: Request, res: Response) => {
    const userLogin = req.body;
    const logon = await this.service.logonUser(userLogin);
    res.status(200).json(logon);
  };
}