import { SignUpUseCase } from '../../app/useCases/auth/SignUpUseCase';

export function makeSignUpUseCase(){
  const salt = 10;
  return new SignUpUseCase(salt);
}
