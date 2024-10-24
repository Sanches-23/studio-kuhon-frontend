import { configureStore } from '@reduxjs/toolkit';
import { productsBaseQuery } from '../queries/products/products.base.query.js';

export const store = configureStore({
  reducer: {
    [productsBaseQuery.reducerPath]: productsBaseQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsBaseQuery.middleware),
});

// import { configureStore } from '@reduxjs/toolkit';
// import { productsQuery } from '../queries/products/products.query.js';
//
// export const store = configureStore({
//   reducer: {
//     [productsQuery.reducerPath]: productsQuery.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsQuery.middleware),
// });
