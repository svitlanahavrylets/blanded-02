import * as productServices from '../services/products.js';

export const getProductsController = async (req, res) => {
  const data = await productServices.getProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};
