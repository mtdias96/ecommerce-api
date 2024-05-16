import { IResponse } from '../../interfaces/IController';
import { FindByIdUseCase } from '../../useCases/product/FindByIdUseCase';

export class FindByIdController {
  constructor(private findByIdUseCase: FindByIdUseCase) { }

  async handle(id: number): Promise<IResponse> {
    try {
      const product = await this.findByIdUseCase.execute(id);

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
