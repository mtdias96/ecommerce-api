// import { IFilter } from '../../interfaces/IFilter';
// import { IDatabaseProduct } from '../../interfaces/IProducts';
// import { prismaClient } from '../../libs/prismaClient';

// export class FilterProductUseCase {
//   async execute({brand, color, size} : IFilter): Promise<IDatabaseProduct[]>{
//     const filteredProduct = await prismaClient.product.findMany({
//       where: {
//         AND: [
//           brand ? {
//             brand: {
//               name: brand
//             }
//           } : {},
//           color ? { color } : {},
//           size ? {
//             variations: {
//               some: { size }
//             }
//           } : {},
//         ],
//       },
//       include: {
//         category: true,
//         brand: true,
//         variations: true,
//       },
//     });

//     return filteredProduct;
//   }
// }

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
              name: brand
            }
          } : {},
          color ? { color } : {},
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

    // Filtrar as variações para manter apenas as que correspondem ao tamanho filtrado
    const productsWithFilteredVariations = filteredProducts.map(product => {
      if (size) {
        return {
          ...product,
          variations: product.variations.filter(variation => variation.size === size)
        };
      }
      return product;
    });

    return productsWithFilteredVariations;
  }
}
