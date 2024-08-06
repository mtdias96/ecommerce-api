import { CepCalculatorController } from '../../app/controllers/cep/CepCalculatorController';
import { makeCepCalculatorUseCase } from './makeCepCalculatorUseCase';

export function makeCepCalculatorController(){
  const cepCalculatorUseCase = makeCepCalculatorUseCase();

  return new CepCalculatorController(cepCalculatorUseCase);
}
