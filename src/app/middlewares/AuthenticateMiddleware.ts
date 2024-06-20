import { verify } from 'jsonwebtoken';
import { env } from '../config/env';
import { IData, IMiddleware, IRequest, IResponse } from '../interfaces/IMiddleware';

export class AuthenticationMiddeware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: 'Acces token invalid'
        }
      };
    }

    try {
      const [bearer, token] = authorization.split(' ');

      if (bearer !== 'Bearer') {
        throw new Error();
      }

      const payload = verify(token, env.jwtSecret);

      return {
        data: {
          accountId: payload.sub,
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: {
          error: 'Acces token invalid'
        }
      };
    }
  }
}
