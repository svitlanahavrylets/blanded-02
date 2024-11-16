import { ProductsCollection } from '../db/models/products.js';

export const getProducts = ({ category, minPrice, maxPrice }) => {
  const productsQuery = ProductsCollection.find();
  // console.log(`productsQuery`, productsQuery);
  if (category) {
    productsQuery.where("category").equals(category);
  }
  if (minPrice) {
    productsQuery.where('price').gte(minPrice);
  }
  if (maxPrice) {
    productsQuery.where('price').lte(maxPrice);
  }
return productsQuery;
};


export const getProductById = (productId) => {
  const product = ProductsCollection.findById(productId);
  return product;
};
export const postProducts = (body) => ProductsCollection.create(body);
export const patchProducts = (productId, body) =>
  ProductsCollection.findOneAndUpdate({ _id: productId }, body, { new: true });
