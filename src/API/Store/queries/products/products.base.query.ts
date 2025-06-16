import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const productsBaseQuery = fetchBaseQuery({
  // baseUrl: 'https://fakestoreapi.com',
  baseUrl: 'https://dummyjson.com',
});
