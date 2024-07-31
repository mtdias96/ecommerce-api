import { IResponse } from '../../interfaces/IMiddleware';
import { FindByIdUseCase } from '../../useCases/product/FindByIdUseCase';


export class FindByIdController {
  constructor(private findByIdUseCase: FindByIdUseCase) { }

  async handle({params}: any ): Promise<IResponse> {
    console.log(params);
    try {
      const id = params.id;
      const normalizedId = id.replace(/^:/, '');

      const product = await this.findByIdUseCase.execute(normalizedId);

      return {
        statusCode: 200,
        body: {
          product
        }
      };
    } catch (error) {
      throw new Error('Erro');
    }
  }
}
