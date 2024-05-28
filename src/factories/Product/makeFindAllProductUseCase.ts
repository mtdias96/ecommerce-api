import { FindAllProductUseCase } from '../../app/useCases/product/FindAllProductUseCase';

export function makeFindAllProductUseCase(){
  return new FindAllProductUseCase();
}
