import { ProductsCollection } from '../db/models/products.js';

export const getProducts = () => ProductsCollection.find();
