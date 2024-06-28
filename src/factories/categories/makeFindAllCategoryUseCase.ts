import { FindAllCategoryUseCase } from '../../app/useCases/category/FindAllCategoryUseCase';


export function makeFindAllCategoryUseCase(){
  return new FindAllCategoryUseCase();
}
