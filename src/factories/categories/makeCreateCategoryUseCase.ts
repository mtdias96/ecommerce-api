import { CreateCategoryUseCase } from '../../app/useCases/category/CreateCategoryUseCase';


export function makeCreateCategoryUseCase(){
  return new CreateCategoryUseCase();
}
