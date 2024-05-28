import { CreateCategoryController } from '../../app/controllers/product/CreateCategoryController';
import { makeCreateCategoryUseCase } from './makeCreateCategoryUseCase';

export function makeCreateCategoryController(){
  const createCategoryUseCase = makeCreateCategoryUseCase();

  return new CreateCategoryController(createCategoryUseCase);
}
