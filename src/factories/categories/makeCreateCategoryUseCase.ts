import { CreateCategoryUseCase } from '../../app/useCases/product/CreateCategoryUseCase';

export function makeCreateCategoryUseCase(){
  return new CreateCategoryUseCase();
}
