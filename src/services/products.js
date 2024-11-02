import { ProductsCollection } from '../db/models/products.js';

export const getProducts = () => ProductsCollection.find();
export const getProductById = (productId) => {
  const product = ProductsCollection.findById(productId);
  return product;
};
export const postProducts = (body) => ProductsCollection.create(body);
