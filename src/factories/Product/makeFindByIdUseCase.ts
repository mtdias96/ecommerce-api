import { FindByIdUseCase } from '../../app/useCases/product/FindByIdUseCase';

export function makeFindyByIdUseCase(){
  return new FindByIdUseCase();
}
