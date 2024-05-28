import { IController, IRequest, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController{
  async handle(req: IRequest): Promise<IResponse> {
    console.log(req);

    return {
      statusCode: 200,
      body: {
        leads: [
          {id: '1', name: 'zezinho'},
          {id: '2', name: 'Matheusinho'},
          {id: '3', name: 'Carlinhos'},
        ]
      }
    };
  }
}
