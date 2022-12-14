import { Request, Response } from 'express';
import LoginService from '../services/loginServices';
import 'express-async-errors';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public logonUser = async (req: Request, res: Response) => {
    const userLogin = req.body;
    const logon = await this.service.logonUser(userLogin);
    if (logon.type) {
      return res.status(logon.type).json({ message: logon.message });
    }
    res.status(200).json({ token: logon.message });
  };
}