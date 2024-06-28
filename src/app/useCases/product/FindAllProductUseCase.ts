import { prismaClient } from '../../libs/prismaClient';

export class FindAllProductUseCase {

  async execute() {
    try {
      const products = await prismaClient.product.findMany({
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

      if (!products) {
        throw new Error('Products not found');
      }

      return products;

    } catch (error) {
      throw new Error('Erro ao obter os produtos.');
    }
  }
}
