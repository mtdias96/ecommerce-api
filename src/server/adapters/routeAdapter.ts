import { Request, Response } from 'express';
import { IController } from '../../app/interfaces/IController';

export function routeAdapter(controller: IController){
  return async (req: Request, res: Response) => {
    const { statusCode, body } = await controller.handle({
      body: req.body,
      headers: req.headers,
      params: req.params
    });

    res.status(statusCode).json(body);
  };
}
