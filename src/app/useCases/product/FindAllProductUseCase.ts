import { prismaClient } from '../../libs/prismaClient';

export class FindAllProductUseCase {

  async execute() {
    try {
      const products = await prismaClient.product.findMany();
      console.log(products);
      return products;

    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
      throw new Error('Erro ao obter os produtos.');
    }
  }
}
