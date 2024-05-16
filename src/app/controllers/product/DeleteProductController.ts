import { ZodError, z } from 'zod';
import { IRequest, IResponse } from '../../interfaces/IController';
import { DeleteProductUseCase } from '../../useCases/product/DeleteProductUseCase';


const schema = z.object({
  id: z.number(),
});

export class DeleteProductController {
  constructor(private readonly deleteProductUseCase: DeleteProductUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    console.log(body);
    try {
      const { id } = schema.parse(body);
      console.log(id);
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
