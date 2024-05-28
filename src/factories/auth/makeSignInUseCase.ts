import { SignInUseCase } from '../../app/useCases/auth/SignInUseCase';

export function makeSignInUseCase(){
  return new SignInUseCase();
}
