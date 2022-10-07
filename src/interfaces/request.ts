import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default interface IextendReq extends Request {
  user?: string | JwtPayload;
}