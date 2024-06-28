import { FindAllCategoryUseCase } from '../../useCases/category/FindAllCategoryUseCase';
export class FindAllCategoryController {
  constructor(private findAllCategoryUseCase: FindAllCategoryUseCase) { }
  async handle() {
    try {
      const categories = await this.findAllCategoryUseCase.execute();
      return {
        statusCode: 200,
        body: categories
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { error: 'Erro ao obter os dados.' }
      };
    }
  }
}

