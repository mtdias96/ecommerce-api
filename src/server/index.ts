import express from 'express';

import cors from '../app/middlewares/cors';
import { makeCreateProductController } from '../factories/Product/makeCreateProductController';
import { makeDeleteProductController } from '../factories/Product/makeDeleteProductController';
import { makeFindAllProductController } from '../factories/Product/makeFindAllProductController';
import { makeFindByIdController } from '../factories/Product/makeFindyByIdController';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { makeCreateBrandController } from '../factories/brand/makeCreateBrandController';
import { makeFindAllBrandController } from '../factories/brand/makeFindAllBrandController';
import { makeCreateCategoryController } from '../factories/categories/makeCreateCategoryController';
import { makeFindAllCategoryController } from '../factories/categories/makeFindAllCategoryController';
import { makeFilterProductController } from '../factories/filter/makeCreateCategoryController';
import { makeAuthenticationMiddleware } from '../factories/makeAuthenticationMiddleware';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { routeAdapter } from './adapters/routeAdapter';


const app = express();

app.use(express.json());

app.use(cors);

//Categoria
app.post('/categoria/cadastrar', routeAdapter((makeCreateCategoryController())));
app.get('/categoria', routeAdapter((makeFindAllCategoryController())));

//Marcas
app.post('/marca/cadastrar', routeAdapter((makeCreateBrandController())));
app.get('/marca', routeAdapter((makeFindAllBrandController())));

//Login e cadastro
app.post('/cadastrar', routeAdapter(makeSignUpController()));
app.post('/entrar', routeAdapter(makeSignInController()));
//VAuthentificação do token
app.get('/perfil', middlewareAdapter(makeAuthenticationMiddleware()));

//Produto
app.post('/produto/cadastrar', routeAdapter(makeCreateProductController()));
app.get('/produto', routeAdapter(makeFindAllProductController()));
app.get('/produto/:id', routeAdapter(makeFindByIdController()));
app.delete('/produto/deletar/:id', routeAdapter(makeDeleteProductController()));
app.post('/produto/categories', routeAdapter(makeCreateProductController()));

//Filters
app.get('/filter', routeAdapter(makeFilterProductController()));


//Servidor
app.listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});
