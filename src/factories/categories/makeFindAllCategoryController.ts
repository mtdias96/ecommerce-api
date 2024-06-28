import { FindAllCategoryController } from '../../app/controllers/category/FindAllCategoryController';
import { makeFindAllCategoryUseCase } from './makeFindAllCategoryUseCase';


export function makeFindAllCategoryController(){
  const findAllCategoryUseCase = makeFindAllCategoryUseCase();

  return new FindAllCategoryController(findAllCategoryUseCase);
}
