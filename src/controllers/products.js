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

export const postProductsController = async (req, res) => {
  // console.log(req.body);
  const data = await productServices.postProducts(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data,
  });
};

export const patchProductsController = async (req, res) => {
  // console.log(req.body);
  const { productId } = req.params;
  const data = await productServices.patchProducts(productId, req.body);
  if (!data) throw createHttpError(404, 'product not found');
  res.json({
    status: 200,
    message: 'Successfully update a product!',
    data,
  });
};
