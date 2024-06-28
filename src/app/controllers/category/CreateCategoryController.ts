import { ZodError, z } from 'zod';
import { IRequest, IResponse } from '../../interfaces/IController';
import { CreateCategoryUseCase } from '../../useCases/category/CreateCategoryUseCase';

const schema = z.object({
  name: z.string(),
});

export class CreateCategoryController {
  constructor(private readonly createCategoryController: CreateCategoryUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name } = schema.parse(body);

      await this.createCategoryController.excecute(name);

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
