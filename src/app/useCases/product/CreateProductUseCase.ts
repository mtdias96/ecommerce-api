import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { ICreateProductInput } from '../../interfaces/IProducts';

import { prismaClient } from '../../libs/prismaClient';

type IOutput = void;


export class CreateProductUseCase {
  async excecute({
    name,
    price,
    color,
    categoryId,
    image,
    description,
    gender,
    variations,
    brandProduct,
  }: ICreateProductInput): Promise<IOutput> {
    const productAlreadyExists = await prismaClient.product.findFirst({
      where: {
        name
      }
    });

    if (productAlreadyExists) {
      throw new ProductAlreadyExists();
    }

    await prismaClient.product.create({
      data: {
        name,
        price,
        color,
        image,
        gender,
        description,
        brandId: brandProduct.id,
        categoryId,
        variations: {
          createMany: {
            data: variations.map((variation) => ({
              size: variation.size,
              quantity: variation.quantity,
            }))
          }
        },
      }
    });
  }
}
