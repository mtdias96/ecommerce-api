import { ZodError, z } from 'zod';
import { AccountAlreadyExists } from '../../errors/auth/AccountAlreadyExists';

import { IController, IRequest, IResponse } from '../../interfaces/IController';

import { SignUpUseCase } from '../../useCases/auth/SignUpUseCase';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) { }

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);

      const {accessToken} = await this.signUpUseCase.execute({ email, name, password });

      return {
        statusCode: 200,
        body: {accessToken}
      };

    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            error: 'This email is already in use'
          }
        };
      }

      throw error;
    }

  }

}
