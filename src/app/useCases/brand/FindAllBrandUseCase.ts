import { prismaClient } from '../../libs/prismaClient';

export class FindAllBrandUseCase {
  async execute() {
    try {
      const products = await prismaClient.brand.findMany();
      return products;

    } catch (error) {
      throw new Error('Erro ao obter os dados.');
    }
  }
}
