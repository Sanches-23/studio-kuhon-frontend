import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
import { Product } from '../types/Product';

export const createGetProductByIdEndpoint = (
  build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
) => {
  return build.query<Product, string>({
    query: (id) => `/products/${id}`,
    providesTags: ['Products'],
  });
};
