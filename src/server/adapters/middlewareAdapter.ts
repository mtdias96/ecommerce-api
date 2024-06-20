import { NextFunction, Request, Response } from 'express';
import { IMiddleware } from '../../app/interfaces/IMiddleware';

export function middlewareAdapter(middleware: IMiddleware){
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await middleware.handle({
      headers: req.headers as Record<string, string>,
    });

    if('statusCode' in result){
      return res.status(result.statusCode).json(result.body);
    }

    req.metadata = {
      ...req.metadata,
      ...result.data,
    };

    next();
  };
}


