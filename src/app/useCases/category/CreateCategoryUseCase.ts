import { prismaClient } from '../../libs/prismaClient';

type IOutput = void;
type ICategory = string

export class CreateCategoryUseCase {
  async excecute(name: ICategory): Promise<IOutput> {
    await prismaClient.category.create({
      data: {
        name,
      }
    });
  }
}
