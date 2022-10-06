interface IUser {
  id?: number;
  username: string;
  class: string;
  level: number;
  password?: string;
}

export default IUser;