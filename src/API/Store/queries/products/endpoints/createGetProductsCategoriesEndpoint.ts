import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query';
import { Category } from '../types/Category';

export const createGetProductsCategoriesEndpoint = (
  build: EndpointBuilder<BaseQueryFn, 'Products', 'productsApi'>
) => {
  return build.query<Category[], void>({
    query: () => '/products/categories',
  });
};
