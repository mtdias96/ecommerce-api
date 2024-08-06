import { z } from 'zod';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { CepCalculatorUseCase } from '../../useCases/cep/CepCalculatorUseCase';

const cepSchema = z.object ({
  fromCep: z.string().regex(/^\d{8}$/, {
    message: 'CEP inválido. O formato deve ser apenas 8 dígitos numéricos',
  }),
  toCep: z.string().regex(/^\d{8}$/, {
    message: 'CEP inválido. O formato deve ser apenas 8 dígitos numéricos',
  }),
  quantity: z.number().int().positive()
});

export class CepCalculatorController implements IController{
  constructor(private readonly cepCalculatorController: CepCalculatorUseCase){}

  async handle({body}: IRequest): Promise<IResponse>{
    const {fromCep, quantity, toCep} = cepSchema.parse(body);

    console.log(fromCep, quantity, toCep);
    return  {
      statusCode: 200,
      body: {
        body
      }
    };
  }
}
