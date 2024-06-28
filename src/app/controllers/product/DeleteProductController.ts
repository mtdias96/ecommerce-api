import { ZodError, z } from 'zod';
import { IRequest, IResponse } from '../../interfaces/IController';
import { DeleteProductUseCase } from '../../useCases/product/DeleteProductUseCase';


const schema = z.object({
  id: z.string(),
});

export class DeleteProductController {
  constructor(private readonly deleteProductUseCase: DeleteProductUseCase) { }

  async handle({ params }: IRequest): Promise<IResponse> {

    try {
      const { id } = schema.parse(params);
      await this.deleteProductUseCase.execute({ id });
    } catch (error) {

      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }
    }

    return {
      statusCode: 204,
      body: {
        message: 'Deletado'
      }
    };
  }
}
