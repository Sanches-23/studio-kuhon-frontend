import { createApi } from '@reduxjs/toolkit/query/react';
import { createGetProductsEndpoint } from './endpoints/createGetProductsEndpoint.js';
import { createGetProductByIdEndpoint } from './endpoints/createGetProductByIdEndpoint.js';
import { productsBaseQuery } from './products.base.query.js';
import { createGetProductsCategoriesEndpoint } from './endpoints/createGetProductsCategoriesEndpoint';

export const productsQuery = createApi({
  reducerPath: 'productsApi',
  baseQuery: productsBaseQuery,
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: createGetProductsEndpoint(build),
    getProductById: createGetProductByIdEndpoint(build),
    getCategories: createGetProductsCategoriesEndpoint(build),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useLazyGetProductsQuery,
  useLazyGetProductByIdQuery,
} = productsQuery;
