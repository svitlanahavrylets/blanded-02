import { Router } from 'express';
import * as productController from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductsSchema,
  updateProductsSchema,
} from '../validation/product.js';
import { isValidId } from '../middlewares/isValidId.js';

const productsRouter = Router();

productsRouter.get('/', ctrlWrapper(productController.getProductsController));
productsRouter.get(
  '/:productId',
  isValidId,
  ctrlWrapper(productController.getProductByIdController),
);
productsRouter.post(
  '/',
  validateBody(createProductsSchema),
  ctrlWrapper(productController.postProductsController),
);

productsRouter.patch(
  '/:productId',
  isValidId,
  validateBody(updateProductsSchema),
  ctrlWrapper(productController.patchProductsController),
);

export default productsRouter;
