import jwt, { Secret } from 'jsonwebtoken';
import Ilogin from '../interfaces/login';
import IUser from '../interfaces/user';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';

const { JWT_SECRET } = process.env;
export default class LoginService {
  private model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async logonUser(userLogin: Ilogin) {
    const user = await this.model.getUser(userLogin);

    if (user.length === 0) {
      return { message: 'Username or password invalid' };
    } 
    const token = this.generateToke(user[0]);
    return { token };
  }

  private generateToke = (user:IUser) => {
    const payload = { id: user.id, name: user.username, classe: user.classe };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}