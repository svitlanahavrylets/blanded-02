import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import productsRouter from './routers/products.js';
import auth from './routers/auth.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use('/users', auth);
  app.use('/products', productsRouter);
  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
