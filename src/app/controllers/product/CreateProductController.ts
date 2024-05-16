import { ZodError, z } from 'zod';
import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { IRequest, IResponse } from '../../interfaces/IController';
import { CreateProductUseCase } from '../../useCases/product/CreateProductUseCase';


const schema = z.object({
  name: z.string().min(3),
  price: z.number(),
  size: z.array(z.string()),
  color: z.array(z.string()),
  description: z.string(),
  quantity: z.number(),
  image: z.array(z.number()),
  categoryId: z.number(),
  brand: z.string()
});

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, price, size, color, description, quantity, image, categoryId, brand } = schema.parse(body);

      await this.createProductUseCase.excecute({ name, price, size, color, description, quantity, image, categoryId, brand });

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

      if (error instanceof ProductAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            error: 'This product existis'
          }
        };
      }

      throw error;
    }
  }
}
