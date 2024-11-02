import createHttpError from 'http-errors';
import * as productServices from '../services/products.js';

export const getProductsController = async (req, res) => {
  const data = await productServices.getProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;

  const product = await productServices.getProductById(productId);

  if (!product) throw createHttpError(404, 'product not found');

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};
