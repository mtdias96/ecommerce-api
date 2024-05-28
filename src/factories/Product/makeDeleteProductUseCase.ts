import { DeleteProductUseCase } from '../../app/useCases/product/DeleteProductUseCase';

export function makeDeleteProductUseCase(){
  return new DeleteProductUseCase();
}
