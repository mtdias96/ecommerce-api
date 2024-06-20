import express from 'express';

import cors from '../app/middlewares/cors';
import { makeCreateProductController } from '../factories/Product/makeCreateProductController';
import { makeDeleteProductController } from '../factories/Product/makeDeleteProductController';
import { makeFindAllProductController } from '../factories/Product/makeFindAllProductController';
import { makeFindByIdController } from '../factories/Product/makeFindyByIdController';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { makeAuthenticationMiddleware } from '../factories/makeAuthenticationMiddleware';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { routeAdapter } from './adapters/routeAdapter';


const app = express();

app.use(express.json());

app.use(cors);

app.post('/cadastrar', routeAdapter(makeSignUpController()));

app.post('/entrar', routeAdapter(makeSignInController()));

app.get('/perfil',
  middlewareAdapter(makeAuthenticationMiddleware()));

app.post('/product/cadastrar', routeAdapter(makeCreateProductController()));

app.get('/produtos', routeAdapter(makeFindAllProductController()));

app.get('/produto/:id', routeAdapter(makeFindByIdController()));

app.delete('/products/delete', routeAdapter(makeDeleteProductController()));

app.post('/product/categories', routeAdapter(makeCreateProductController()));

app.listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});
