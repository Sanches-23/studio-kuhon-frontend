import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './products.query.js';

export const productsBaseQuery = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
