import { CepAddreasController } from '../../app/controllers/cep/CepAddreasController';
import { makeCepAddreasUseCase } from './makeCepAddreasUseCase';


export function makeCepAddreasController(){
  const cepCalculatorUseCase = makeCepAddreasUseCase();

  return new CepAddreasController(cepCalculatorUseCase);
}
