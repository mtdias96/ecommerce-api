import { IProduct } from '../../interfaces/IController';
import { prismaClient } from '../../libs/prismaClient';



export class FindByIdUseCase {
  async execute(id: number): Promise<IProduct | null> {
    try {
      const product = await prismaClient.product.findUnique({
        where: { id }
      });

      return product;
    } catch (error) {
      console.error('Erro ao buscar produto por ID:', error);
      return null;
    }
  }
}
