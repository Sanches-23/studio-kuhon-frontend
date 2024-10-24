import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const productsBaseQuery = fetchBaseQuery({
  baseUrl: 'https://fakestoreapi.com',
});