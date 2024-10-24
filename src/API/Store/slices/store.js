import { configureStore } from '@reduxjs/toolkit';
import { productsQuery } from '../queries/products/products.query.js';

export const store = configureStore({
  reducer: {
    [productsQuery.reducerPath]: productsQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsQuery.middleware),
});
