import { FilterProductController } from '../../app/controllers/filters/FilterProductController';
import { makeFilterProductUseCase } from './makeCreateCategoryUseCase';

export function makeFilterProductController(){
  const filterProductUseCase = makeFilterProductUseCase();

  return new FilterProductController(filterProductUseCase);
}
