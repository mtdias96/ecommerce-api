import { AuthenticationMiddeware } from '../app/middlewares/AuthenticateMiddleware';

export function makeAuthenticationMiddleware(){
  return new AuthenticationMiddeware();
}
