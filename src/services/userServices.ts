import jwt, { Secret } from 'jsonwebtoken';
import IUser from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/userModel';

const { JWT_SECRET } = process.env;
export default class UserServices {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: IUser): Promise<Secret> {
    const newUser = await this.model.createUser(user);
    const token = this.generateToke(newUser);
    return token;
  }

  private generateToke = (user:IUser) => {
    const payload = { id: user.id, name: user.username, classe: user.classe };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}