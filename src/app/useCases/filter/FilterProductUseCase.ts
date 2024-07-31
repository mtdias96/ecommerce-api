import { IFilter } from '../../interfaces/IFilter';
import { IDatabaseProduct } from '../../interfaces/IProducts';
import { prismaClient } from '../../libs/prismaClient';

export class FilterProductUseCase {
  async execute({ brand, color, size }: IFilter): Promise<IDatabaseProduct[]> {

    const filteredProducts = await prismaClient.product.findMany({
      where: {
        AND: [
          brand ? {
            brand: {
              name: brand.toLowerCase()
            }
          } : {},
          color ? { color: color.toLowerCase() } : {},
          size ? {
            variations: {
              some: { size }
            }
          } : {},
        ],
      },
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
      },
    });

    const productsWithFilteredVariations = filteredProducts.map(product => {
      let filteredVariations = product.variations;

      if (size) {
        filteredVariations = filteredVariations.filter(variation => variation.size === size);
      }

      return {
        ...product,
        variations: filteredVariations,
      };
    });

    return productsWithFilteredVariations;
  }
}
