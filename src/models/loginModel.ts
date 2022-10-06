import { Pool, RowDataPacket } from 'mysql2/promise';
import Ilogin from '../interfaces/login';
import IUser from '../interfaces/user';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUser(userLogin: Ilogin): Promise<IUser[]> {
    const { username, password } = userLogin;
    const [result] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      `SELECT id, username, classe, level FROM Trybesmith.Users
      WHERE username = ? AND password = ?`, 
      [username, password],
    );
    console.log(result);
    
    return result;
  } 
}