import { Router } from 'express';
import * as productController from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(productController.getProductsController));
productsRouter.get(
  '/:productId',
  ctrlWrapper(productController.getProductByIdController),
);
productsRouter.post('/', ctrlWrapper(productController.postProductsController));

export default productsRouter;
