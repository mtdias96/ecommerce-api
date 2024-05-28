import express from 'express';

import { CreateCategoryController } from '../app/controllers/product/CreateCategoryController';
import { CreateProductController } from '../app/controllers/product/CreateProductController';
import { DeleteProductController } from '../app/controllers/product/DeleteProductController';
import cors from '../app/middlewares/cors';
import { CreateCategoryUseCase } from '../app/useCases/product/CreateCategoryUseCase';
import { CreateProductUseCase } from '../app/useCases/product/CreateProductUseCase';
import { DeleteProductUseCase } from '../app/useCases/product/DeleteProductUseCase';
import { FindAllProductUseCase } from '../app/useCases/product/FindAllProductUseCase';
import { makeFindByIdController } from '../factories/Product/makeFindyByIdController';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { routeAdapter } from './adapters/routeAdapter';


const app = express();
app.use(express.json());

app.use(cors);

app.post('/cadastrar', routeAdapter(makeSignUpController()));

app.post('/entrar', routeAdapter(makeSignInController()));

app.post('/product/cadastrar', async (req, res) => {
  const createProductUseCase = new CreateProductUseCase();
  const createProductController = new CreateProductController(createProductUseCase);

  const { statusCode, body } = await createProductController.handle({
    body: req.body,
    headers: req.headers
  });

  res.status(statusCode).json(body);
});

app.post('/product/categories', async (req, res) => {
  const createCategoryUseCase = new CreateCategoryUseCase();
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  const { statusCode, body } = await createCategoryController.handle({
    body: req.body,
    headers: req.headers
  });

  res.status(statusCode).json(body);
});

app.get('/product', async (req, res) => {
  const findALlProduct = new FindAllProductUseCase();

  const products = await findALlProduct.execute();
  res.json(products);

});

app.get('/product/:id', routeAdapter(makeFindByIdController()));

app.delete('/products/delete', async (req, res) => {
  const deleteUseCase = new DeleteProductUseCase();
  const deleteController = new DeleteProductController(deleteUseCase);

  const { statusCode, body } = await deleteController.handle({
    body: req.body,
    headers: req.headers
  });

  res.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log('Server started at http://localhost:3001');
});
