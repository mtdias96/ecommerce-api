import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { env } from '../../config/env';
import { AccountAlreadyExists } from '../../errors/auth/AccountAlreadyExists';
import { prismaClient } from '../../libs/prismaClient';


interface IInput {
  fullname: string;
  email: string;
  password: string;
}

interface IOutput {
  accessToken: string;
}


export class SignUpUseCase {
  constructor(private readonly salt: number) { }

  async execute({ fullname,email, password }: IInput): Promise<IOutput> {

    const accountsAlreadyExists = await prismaClient.user.findUnique({
      where: { email }
    });

    if (accountsAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, this.salt);

    await prismaClient.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword
      }
    });

    const accessToken = sign(
      { sub:email, },
      env.jwtSecret,
      { expiresIn: '1d' }
    );


    return {accessToken};
  }

}
