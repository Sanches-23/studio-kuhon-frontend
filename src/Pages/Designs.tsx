import DesignList from '../Components/organisms/designList.js';
import React from 'react';
// import { Suspense } from 'react';

const Designs: React.FC = () => {
  return (
    <>
      {/*<Suspense fallback={<p>Loading...</p>}>*/}
      <DesignList />
      {/*</Suspense>*/}
    </>
  );
};

export default Designs;
