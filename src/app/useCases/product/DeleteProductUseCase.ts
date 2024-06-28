
import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  id: string;
}
type IOutput = void;

export class DeleteProductUseCase {
  async execute({ id }: IInput): Promise<IOutput> {
    const product = await prismaClient.product.findUnique({
      where: { id }
    });

    if (!product) {
      throw new ProductAlreadyExists();
    }

    try {
      await prismaClient.productVariation.deleteMany({
        where: {
          productId: id
        }
      });

      await prismaClient.product.delete({
        where: {
          id: id
        }
      });
    } catch (error) {
      console.error(`Error deleting product with ID: ${id}`, error);
      throw error;
    }
  }
}
