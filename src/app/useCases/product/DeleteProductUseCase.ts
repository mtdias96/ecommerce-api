import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  id: number;
}
type IOutput = void;


export class DeleteProductUseCase {

  async execute({ id }: IInput): Promise<IOutput> {
    const productAlreadyExists = await prismaClient.product.findUnique({
      where: { id }
    });

    if (!productAlreadyExists) {
      throw new ProductAlreadyExists();
    }

    await prismaClient.product.delete({
      where: {
        id: id
      }
    });
  }
}
