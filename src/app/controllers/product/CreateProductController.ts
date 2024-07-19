import { ZodError, z } from 'zod';
import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { IRequest, IResponse } from '../../interfaces/IController';
import { prismaClient } from '../../libs/prismaClient';
import { CreateProductUseCase } from '../../useCases/product/CreateProductUseCase';

const schema = z.object({
  name: z.string().min(3),
  price: z.number(),
  color: z.string(),
  description: z.string(),
  image: z.array(z.number()),
  categoryId: z.number(),
  brand: z.string(),
  gender: z.string(),
  variations: z.array(z.object({
    size: z.string(),
    quantity: z.number().int(),
  })),
});

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    console.log(body);
    try {
      const { name, price, color, description, brand, image, categoryId, gender, variations } = schema.parse(body);

      const brandProduct = await prismaClient.brand.findFirst({
        where: {name: brand}
      });

      if(!brandProduct){
        throw new Error('Brand not exists');
      }

      await this.createProductUseCase.excecute({ name, price, color, description, image, categoryId, brand, gender, variations, brandProduct });

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
