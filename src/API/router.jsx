import { createBrowserRouter, Navigate } from 'react-router-dom';
import Designs from '../Pages/Designs.jsx';
import SingleDesign from '../Pages/SingleDesign.jsx';
import App from '../App.jsx';
import NotFound from '../Pages/NotFound.jsx';

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
