import { CreateBrandController } from '../../app/controllers/brand/CreateCategoryController';
import { makeCreateBrandUseCase } from './makeCreateBrandUseCase';

export function makeCreateBrandController(){
  const createBrandUseCase = makeCreateBrandUseCase();

  return new CreateBrandController(createBrandUseCase);
}
