import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createGetProductsEndpoint } from './endpoints/createGetProductsEndpoint.js';
import { createGetProductByIdEndpoint } from './endpoints/createGetProductByIdEndpoint.js';

export const productsBaseQuery = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getProducts: createGetProductsEndpoint(build),
    getProductById: createGetProductByIdEndpoint(build),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } =
  productsBaseQuery;

// import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { fetchBaseQuery } from '@reduxjs/toolkit/query';
//
// export const productsBaseQuery = fetchBaseQuery({
//   baseUrl: 'https://fakestoreapi.com',
// });
