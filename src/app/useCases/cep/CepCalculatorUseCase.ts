import httpClient from '../../../server/httpClient';
import { ICepDate, IOutputCep } from '../../interfaces/ICepCalculator';

export class CepCalculatorUseCase{
  async execute({fromCep, quantity, toCep}: ICepDate): Promise<IOutputCep> {
    try{
      const {data: resultCepCalculator} =  await httpClient.post('', {
        from: {postal_code: fromCep},
        to: {postal_code: toCep},
        products: [
          {
            id: 'x',
            height: 12,
            width: 20,
            length: 30,
            weight: 0.9,
            nsurance_value: 10.1,
            quantity
          }
        ]
      });


      return {resultCepCalculator};
    }catch{
      throw new Error('Erro ao calcular o CEP');
    }
  }
}
