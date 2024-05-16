import { hash } from 'bcryptjs';
import { AccountAlreadyExists } from '../../errors/auth/AccountAlreadyExists';
import { prismaClient } from '../../libs/prismaClient';


interface IInput {
  fullname: string;
  email: string;
  password: string;
}

type IOutput = void;

export class SignUpUseCase {
  constructor(private readonly salt: number) { }

  async execute({ email, fullname, password }: IInput): Promise<IOutput> {

    const accountsAlreadyExists = await prismaClient.user.findUnique({
      where: { email }
    });

    if (accountsAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, this.salt);

    await prismaClient.user.create({
      data: {
        email,
        fullname,
        password: hashedPassword
      }
    });
  }
}
