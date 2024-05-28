import { CreateProductController } from '../../app/controllers/product/CreateProductController';
import { makeCreateProductUseCase } from './makeCreateProductUseCase';

export function makeCreateProductController(){
  const createProductUseCase = makeCreateProductUseCase();

  return new CreateProductController(createProductUseCase);
}
