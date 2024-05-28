import { FindAllProductUseCase } from '../../useCases/product/FindAllProductUseCase';

export class FindAllProductController {
  constructor(private findAllProductUseCase: FindAllProductUseCase) { }
  async handle() {
    try {
      const products = await this.findAllProductUseCase.execute();
      return {
        statusCode: 200,
        body: products
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: 'Erro ao obter os produtos.' }
      };
    }
  }
}

