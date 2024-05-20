import express from 'express';
import { SignInController } from '../app/controllers/auth/SignInController';
import { SignUpController } from '../app/controllers/auth/SignUpController';
import { CreateCategoryController } from '../app/controllers/product/CreateCategoryController';
import { CreateProductController } from '../app/controllers/product/CreateProductController';
import { DeleteProductController } from '../app/controllers/product/DeleteProductController';
import { FindByIdController } from '../app/controllers/product/FindByNameProductController';
import cors from '../app/middlewares/cors';
import { SignInUseCase } from '../app/useCases/auth/SignInUseCase';
import { SignUpUseCase } from '../app/useCases/auth/SignUpUseCase';
import { CreateCategoryUseCase } from '../app/useCases/product/CreateCategoryUseCase';
import { CreateProductUseCase } from '../app/useCases/product/CreateProductUseCase';
import { DeleteProductUseCase } from '../app/useCases/product/DeleteProductUseCase';
import { FindAllProductUseCase } from '../app/useCases/product/FindAllProductUseCase';
import { FindByIdUseCase } from '../app/useCases/product/FindByIdUseCase';


const app = express();
app.use(express.json());

app.use(cors);

app.post('/cadastrar', async (req, res) => {
  const signUpUseCase = new SignUpUseCase(10);
  const signUpController = new SignUpController(signUpUseCase);

  const { statusCode, body } = await signUpController.handle({
    body: req.body,
    headers: req.headers
  });

  res.status(statusCode).json(body);

});

app.post('/entrar', async (req, res) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

  const { statusCode, body } = await signInController.handle({
    body: req.body,
    headers: req.headers
  });
  res.status(statusCode).json(body);
});

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

app.get('/product/:id', async (req, res) => {
  const findByIdProduct = new FindByIdUseCase();
  const product = new FindByIdController(findByIdProduct);
  console.log(req.params.id);

  const { statusCode, body } = await product.handle(Number(req.params.id));
  res.status(statusCode).json(body);


});

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
