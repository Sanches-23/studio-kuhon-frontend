import { createBrowserRouter, Navigate } from 'react-router-dom';
import Designs from '../Pages/Designs.js';
import SingleDesign from '../Pages/SingleDesign.js';
import App from '../App.js';
import NotFound from '../Pages/NotFound';

// const basename = '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'products',
          element: <Designs />,
        },
        {
          path: '',
          element: <Navigate to="products" />,
        },
        {
          path: 'products/:designId',
          element: <SingleDesign />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  // {
  //   basename: basename,
  // }
);
