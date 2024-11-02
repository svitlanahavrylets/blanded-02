import { Router } from 'express';
import * as productController from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/', productController.getProductsController);

export default productsRouter;
