import { CreateProductUseCase } from '../../app/useCases/product/CreateProductUseCase';

export function makeCreateProductUseCase(){
  return new CreateProductUseCase();
}
