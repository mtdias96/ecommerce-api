import express from 'express';

import cors from './app/middlewares/cors';
import { makeCreateProductController } from './factories/Product/makeCreateProductController';
import { makeDeleteProductController } from './factories/Product/makeDeleteProductController';
import { makeFindAllProductController } from './factories/Product/makeFindAllProductController';
import { makeFindByIdController } from './factories/Product/makeFindyByIdController';
import { makeSignInController } from './factories/auth/makeSignInController';
import { makeSignUpController } from './factories/auth/makeSignUpController';
import { makeCreateBrandController } from './factories/brand/makeCreateBrandController';
import { makeFindAllBrandController } from './factories/brand/makeFindAllBrandController';
import { makeCreateCategoryController } from './factories/categories/makeCreateCategoryController';
import { makeFindAllCategoryController } from './factories/categories/makeFindAllCategoryController';
import { makeCepAddreasController } from './factories/cep/makeCepAddreasController';
import { makeCepCalculatorController } from './factories/cep/makeCepCalculatorController';
import { makeFilterProductController } from './factories/filter/makeCreateCategoryController';
import { makeAuthenticationMiddleware } from './factories/makeAuthenticationMiddleware';
import { routeAdapter } from './server/adapters/routeAdapter';
import { middlewareAdapter } from './server/adapters/middlewareAdapter';


const app = express();

app.use(express.json());

app.use(cors);

//Categoria
app.post('/categoria/cadastrar', routeAdapter(makeCreateCategoryController()));
app.get('/categoria', routeAdapter(makeFindAllCategoryController()));

//Marcas
app.post('/marca/cadastrar', routeAdapter(makeCreateBrandController()));
app.get('/marca', routeAdapter(makeFindAllBrandController()));

//Login e cadastro
app.post('/cadastrar', routeAdapter(makeSignUpController()));
app.post('/entrar', routeAdapter(makeSignInController()));
//VAuthentificação do token
app.get('/perfil', middlewareAdapter(makeAuthenticationMiddleware()));

//Produto
app.post('/produto/cadastrar', routeAdapter(makeCreateProductController()));
app.get('/produto', routeAdapter(makeFindAllProductController()));
app.delete('/produto/deletar/:id', routeAdapter(makeDeleteProductController()));
app.post('/produto/categories', routeAdapter(makeCreateProductController()));

//Filters
app.post('/produto/filtro', routeAdapter(makeFilterProductController()));

app.get('/produto/:id', routeAdapter(makeFindByIdController()));

//Cep-Calculator
app.post('/cep/cotacao', routeAdapter(makeCepCalculatorController()));

//Cep Addreas
app.post('/cep/endereco', routeAdapter(makeCepAddreasController()));

//Servidor
app.listen(8080, () => {
  console.log('Server started at http://localhost:8080');
});

export default app;
