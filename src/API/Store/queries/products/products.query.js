import { createApi } from '@reduxjs/toolkit/query/react';
import { createGetProductsEndpoint } from './endpoints/createGetProductsEndpoint.js';
import { createGetProductByIdEndpoint } from './endpoints/createGetProductByIdEndpoint.js';
import { productsBaseQuery } from './products.base.query.js';

export const productsQuery = createApi({
  reducerPath: 'productsApi',
  baseQuery: productsBaseQuery,
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: createGetProductsEndpoint(build),
    getProductById: createGetProductByIdEndpoint(build),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsQuery;