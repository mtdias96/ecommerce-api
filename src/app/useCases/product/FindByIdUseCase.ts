import { IDatabaseProduct } from '../../interfaces/IProducts';
import { prismaClient } from '../../libs/prismaClient';

export class FindByIdUseCase {
  async execute(id: string): Promise<IDatabaseProduct | null> {
    try {
      const product = await prismaClient.product.findUnique({
        where: { id },
        include: {
          category: {
            select: {
              name: true
            }
          },
          variations: {
            select: {
              size: true,
              quantity: true,
            }
          },
          brand: {
            select: {
              name: true
            }
          }
        }
      });

      if (!product) {
        throw new Error('Product not found');
      }

      return product;
    } catch (error) {
      throw new Error('Produto não encontrado');

    }
  }
}
