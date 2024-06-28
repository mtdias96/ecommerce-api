import { FilterProductUseCase } from '../../app/useCases/filter/FilterProductUseCase';

export function makeFilterProductUseCase(){
  return new FilterProductUseCase();
}
