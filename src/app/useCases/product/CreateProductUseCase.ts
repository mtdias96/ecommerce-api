import { ProductAlreadyExists } from '../../errors/product/ProductAlreadyExists';
import { IProduct } from '../../interfaces/IController';
import { prismaClient } from '../../libs/prismaClient';

type IOutput = void;

export class CreateProductUseCase {

  async excecute({ name, price, color, categoryId, image, quantity, size, description, brand }: IProduct): Promise<IOutput> {
    const productAlreadyExists = await prismaClient.product.findFirst({
      where: {
        name,
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
        category: { connect: { id: categoryId } },
        image,
        quantity,
        size,
        description,
        brand
      }
    });
  }
}
