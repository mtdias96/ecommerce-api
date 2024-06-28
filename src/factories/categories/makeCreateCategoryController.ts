
import { CreateCategoryController } from '../../app/controllers/category/CreateCategoryController';
import { makeCreateCategoryUseCase } from './makeCreateCategoryUseCase';

export function makeCreateCategoryController(){
  const createCategoryUseCase = makeCreateCategoryUseCase();

  return new CreateCategoryController(createCategoryUseCase);
}
