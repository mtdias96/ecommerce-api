import { error } from 'console';
import { z, ZodError } from 'zod';
import { InvalidCredentials } from '../../errors/auth/InvalidCredentials';
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
    try{
      const {fromCep, quantity, toCep} = cepSchema.parse(body);

      const {resultCepCalculator} = await this.cepCalculatorController.execute({fromCep, quantity, toCep});

      console.log(resultCepCalculator);
      return{
        statusCode: 200,
        body: {
          resultCepCalculator
        }
      };

    }catch(error){
      if(error instanceof ZodError){
        return {
          statusCode: 400,
          body: error.issues,
        };
      }
    }

    if (error instanceof InvalidCredentials) {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid credentials',
        }
      };

    }
    throw error;
  }
}
