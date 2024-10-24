import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
import { Product } from '../types/Product';

export const createGetProductsEndpoint = (
  build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
) => {
  return build.query<Product[], void>({
    query: () => '/products',
    providesTags: ['Products'],
  });
};
