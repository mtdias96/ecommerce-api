import { FindByIdController } from '../../app/controllers/product/FindByNameProductController';
import { makeFindyByIdUseCase } from './makeFindByIdUseCase';

export function makeFindByIdController(){
  const findByIdUseCase = makeFindyByIdUseCase();
  return new FindByIdController(findByIdUseCase);
}
