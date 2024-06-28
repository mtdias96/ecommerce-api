import { CreateBrandUseCase } from '../../app/useCases/brand/CreateBrandUseCase';

export function makeCreateBrandUseCase(){
  return new CreateBrandUseCase();
}
