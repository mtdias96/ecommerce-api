import { FindByIdController } from '../../app/controllers/product/FindByIdProductController';
import { makeFindyByIdUseCase } from './makeFindByIdUseCase';

export function makeFindByIdController(){
  const findByIdUseCase = makeFindyByIdUseCase();
  return new FindByIdController(findByIdUseCase);
}
