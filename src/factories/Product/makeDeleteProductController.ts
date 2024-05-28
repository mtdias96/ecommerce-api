import { DeleteProductController } from '../../app/controllers/product/DeleteProductController';
import { makeDeleteProductUseCase } from './makeDeleteProductUseCase';

export function makeDeleteProductController(){
  const deleteProductUseCase = makeDeleteProductUseCase();

  return new DeleteProductController(deleteProductUseCase);
}
