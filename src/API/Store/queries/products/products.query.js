import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery: useGetDesignByIdQuery,
} = apiSlice;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
//
// export const productsApi = createApi({
//   reducerPath: 'productsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api/products' }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => '',
//       providesTags: ['Products'],
//     }),
//     getProductById: builder.query({
//       query: (id) => `/${id}`,
//       providesTags: (result, error, id) => [{ type: 'Product', id }],
//     }),
//   }),
// });
//
// export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
