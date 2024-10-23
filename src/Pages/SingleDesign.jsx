import { useGetDesignByIdQuery } from '../API/Store/apiSlice.js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SingleDesign = () => {
  const { designId } = useParams();
  const {
    data: design,
    error,
    isLoading,
    refetch,
  } = useGetDesignByIdQuery(designId, {
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
      <h1>{design.title}</h1>
    </div>
  );
};

export default SingleDesign;
