import { FindAllBrandController } from '../../app/controllers/brand/FindAllBrandController';
import { makeFindAllBrandUseCase } from './makeFindAllBrandUseCase';

export function makeFindAllBrandController(){
  const findAllBrandUseCase = makeFindAllBrandUseCase();

  return new FindAllBrandController(findAllBrandUseCase);
}
