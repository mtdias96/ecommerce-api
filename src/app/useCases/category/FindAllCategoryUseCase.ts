import { prismaClient } from '../../libs/prismaClient';

export class FindAllCategoryUseCase {
  async execute() {
    try {
      const products = await prismaClient.category.findMany();
      return products;

    } catch (error) {
      throw new Error('Erro ao obter os produtos.');
    }
  }
}
