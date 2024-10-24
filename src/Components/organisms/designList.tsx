import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
import { Product } from '../../API/Store/queries/products/types/Product';
import React from 'react';

const DesignList: React.FC = () => {
  const { data: designs, error, isLoading } = useGetProductsQuery();
  // const { data: designs, error, isLoading } = useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
  console.log(designs);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  if (!designs || designs.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <ul>
      {designs.map((design: Product) => (
        <li key={design.id}>{design.title}</li>
      ))}
    </ul>
  );
};

export default DesignList;
