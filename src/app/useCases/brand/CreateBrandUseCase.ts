import { prismaClient } from '../../libs/prismaClient';

type IOutput = void;
type IBrand = string

export class CreateBrandUseCase {
  async excecute(name: IBrand): Promise<IOutput> {
    await prismaClient.brand.create({
      data: {
        name,
      }
    });
  }
}
