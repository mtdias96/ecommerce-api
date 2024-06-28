import { ZodError, z } from 'zod';
import { IRequest, IResponse } from '../../interfaces/IController';
import { CreateBrandUseCase } from '../../useCases/brand/CreateBrandUseCase';


const schema = z.object({
  name: z.string(),
});

export class CreateBrandController {
  constructor(private readonly createBrandController: CreateBrandUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name } = schema.parse(body);

      await this.createBrandController.excecute(name);

      return {
        statusCode: 204,
        body: null
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }


      throw error;
    }
  }
}
