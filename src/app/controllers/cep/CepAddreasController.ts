import { z, ZodError } from 'zod';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { CepAddreasUseCase } from '../../useCases/cep/CepAddreasUseCase';

export class CepAddreasController implements IController {
  constructor(private readonly cepAddreasUseCase: CepAddreasUseCase) {}

  private cepSchema = z.object({
    cep: z.string().regex(/^\d{8}$/, {
      message: 'CEP inválido. O formato deve ser apenas 8 dígitos numéricos',
    }),
  });

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { cep } = this.cepSchema.parse(body);

      const resultCepAddreas = await this.cepAddreasUseCase.execute({ cep });

      console.log(resultCepAddreas);

      return {
        statusCode: 200,
        body: {
          resultCepAddreas,
        },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      return {
        statusCode: 500,
        body: { message: 'Erro interno do servidor' },
      };
    }
  }
}
