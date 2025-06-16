// // import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
// // import { Product } from '../types/Product';
// //
// // export const createGetProductsEndpoint = (
// //   build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
// // ) => {
// //   return build.query<Product[], void>({
// //     query: () => '/products',
// //     providesTags: ['Products'],
// //   });
// // };
//
// // ТРЕБА БУДЕ СПРОБУВАТИ ДЛЯ ВЕЛИКИХ АПІ
// // import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
// // import { Product } from '../types/Product';
// //
// // export interface ProductsQueryParams {
// //   limit: number;
// //   offset: number;
// //   category?: string;
// // }
// //
// // export const createGetProductsEndpoint = (
// //   build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
// // ) => {
// //   return build.query<Product[], ProductsQueryParams>({
// //     query: ({ limit, offset, category }) => {
// //       let url = '/products';
// //       if (category) {
// //         url = `/products/category/${encodeURIComponent(category)}`;
// //       }
// //       return `${url}?limit=${limit}&offset=${offset}`;
// //     },
// //     providesTags: ['Products'],
// //   });
// // };
//
// import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
// import { Product } from '../types/Product';
//
// export const createGetProductsEndpoint = (
//   build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
// ) => {
//   return build.query<Product[], { category?: string } | void>({
//     query: (filter) => {
//       if (filter && filter.category) {
//         return `/products/category/${encodeURIComponent(filter.category)}`;
//       }
//       return '/products';
//     },
//     providesTags: ['Products'],
//   });
// };

import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
import { Product, ProductsResponse } from '../types/Product';

export interface ProductsQueryParams {
  limit?: number;
  skip?: number;
  category?: string;
  q?: string;
  sortBy?: 'price' | 'title';
  order?: 'asc' | 'desc';
}

export const createGetProductsEndpoint = (
  build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
) => {
  return build.query<ProductsResponse, ProductsQueryParams>({
    query: ({ limit = 6, skip = 0, category, q, sortBy, order }) => {
      let url = '/products';
      const params = [];

      // if (category) url = `/products/category/${encodeURIComponent(category)}`;
      // if (q) url = '/products/search';
      // if (q) params.push(`q=${encodeURIComponent(q)}`);

      if (category) {
        url = `/products/category/${category}`;
      }
      if (q) {
        url = '/products/search';
        params.push(`q=${encodeURIComponent(q)}`);
      }

      if (sortBy) params.push(`sortBy=${sortBy}`);
      if (order) params.push(`order=${order}`);
      params.push(`limit=${limit}`, `skip=${skip}`);

      return `${url}?${params.join('&')}`;
    },
    providesTags: ['Products'],
  });
};
