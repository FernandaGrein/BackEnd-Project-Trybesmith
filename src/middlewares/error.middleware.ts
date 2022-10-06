import { NextFunction, Request, Response } from 'express';

class HttpExecption extends Error {
  status: number;

  constructor(status: number, message:string) {
    super(message);
    this.status = status;
  }
}

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status = 500, message } = err as HttpExecption;
  res.status(status).json({ message });
};

export default errorMiddleware;