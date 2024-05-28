import { SignUpController } from '../../app/controllers/auth/SignUpController';
import { makeSignUpUseCase } from './makeSignUpUseCase';

export function makeSignUpController(){
  const signUpUseCase = makeSignUpUseCase();

  return new SignUpController(signUpUseCase);
}
