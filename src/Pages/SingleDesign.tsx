import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useGetProductByIdQuery } from '../API/Store/queries/products/products.query';

const SingleDesign: React.FC = () => {
  const { designId } = useParams<{ designId: string }>();
  const {
    data: design,
    error,
    isLoading,
    refetch,
  } = useGetProductByIdQuery(designId as string, {
    skip: !designId,
  });

  useEffect(() => {
    if (designId) {
      refetch();
    }
  }, [designId, refetch]);

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product details</p>;

  if (!design) return <h1>No product details available</h1>;

  return (
    <div>
      <div>
        <h1>{design.title}</h1>
        <p>{design.description}</p>
        <p>Price: ${design.price}</p>
        <p>Category: {design.category}</p>
        {/*<img src={design.image} alt={design.title} />*/}
      </div>
    </div>
  );
};

export default SingleDesign;
