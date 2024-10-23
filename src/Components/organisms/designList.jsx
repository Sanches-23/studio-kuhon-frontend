import { useGetProductsQuery } from '../../API/Store/apiSlice.js';

const DesignList = () => {
  const { data: designs, error, isLoading } = useGetProductsQuery();
  // const { data: designs, error, isLoading } = useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
  console.log(designs);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <ul>
      {designs.map((design) => (
        <li key={design.id}>{design.title}</li>
      ))}
    </ul>
  );
};

export default DesignList;
//
// import { useGetProductsQuery } from '../../API/Store/apiSlice.js';
// import DesignElement from '../moleculs/designElement.jsx';
//
// const DesignList = () => {
//   const { data: designs, error, isLoading } = useGetProductsQuery();
//   //   // const { data: designs, error, isLoading } = useGetProductsQuery(undefined, { refetchOnMountOrArgChange: true });
//
//   if (isLoading) return <p>Loading products...</p>;
//   if (error) return <p>Error fetching products</p>;
//
//   return (
//     <ul>
//       {designs.map((design) => (
//         <DesignElement key={design.id} design={design} />
//       ))}
//     </ul>
//   );
// };
//
// export default DesignList;
