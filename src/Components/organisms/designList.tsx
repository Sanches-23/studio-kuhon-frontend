import { useGetProductsQuery } from '../../API/Store/queries/products/products.query';
import { Product } from '../../API/Store/queries/products/types/Product';
import React from 'react';
import { StyledTypography } from '../atoms/Typography/StyledTypography';

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
    <div>
      {designs.map((design: Product) => (
        <div key={design.id}>
          <StyledTypography
            type={'heading'}
            text={design.title}
          ></StyledTypography>
        </div>
      ))}
    </div>
  );
};

export default DesignList;
