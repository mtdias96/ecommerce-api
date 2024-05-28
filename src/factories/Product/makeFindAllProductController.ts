import { FindAllProductController } from '../../app/controllers/product/FindAllProductController';
import { makeFindAllProductUseCase } from './makeFindAllProductUseCase';

export function makeFindAllProductController(){
  const findAllProductUseCase = makeFindAllProductUseCase();

  return new FindAllProductController(findAllProductUseCase);
}
