export const createGetProductByIdEndpoint = (build) => {
  return build.query({
    query: (id) => `/products/${id}`,
    providesTags: ['Products'],
  });
};
