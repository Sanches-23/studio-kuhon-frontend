export const createGetProductsEndpoint = (build) => {
  return build.query({
    query: () => '/products',
    providesTags: ['Products'],
  });
};
