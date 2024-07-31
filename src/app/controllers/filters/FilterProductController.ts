import { IResponse } from '../../interfaces/IController';
import { IFilterRequest } from '../../interfaces/IFilter';
import { FilterProductUseCase } from '../../useCases/filter/FilterProductUseCase';

export class FilterProductController{
  constructor (private readonly filterProductUseCase: FilterProductUseCase) {}

  async handle({body} : IFilterRequest): Promise<IResponse>{
    try{
      const {brand, color, size} = body;

      const filteredProduct = await this.filterProductUseCase.execute({brand, color, size});

      return {
        statusCode: 200,
        body: filteredProduct
      };
    }catch{
      throw new Error('Error em filtrar produtos');
    }
  }
}
