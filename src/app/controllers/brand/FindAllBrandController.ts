import { FindAllBrandUseCase } from '../../useCases/brand/FindAllBrandUseCase';

export class FindAllBrandController {
  constructor(private findAllBrandUseCase: FindAllBrandUseCase) { }
  async handle() {
    try {
      const brand = await this.findAllBrandUseCase.execute();
      return {
        statusCode: 200,
        body: brand
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: 'Erro ao obter os dados.' }
      };
    }
  }
}

