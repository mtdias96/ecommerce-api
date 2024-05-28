import { prismaClient } from '../../libs/prismaClient';

export class FindAllProductUseCase {

  async execute() {
    try {
      const products = await prismaClient.product.findMany();
      return products;

    } catch (error) {
      throw new Error('Erro ao obter os produtos.');
    }
  }
}
