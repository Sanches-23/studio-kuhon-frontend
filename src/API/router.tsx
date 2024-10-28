import { createBrowserRouter, Navigate } from 'react-router-dom';
import Designs from '../Pages/Designs.js';
import SingleDesign from '../Pages/SingleDesign.js';
import App from '../App.js';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Order from '../Pages/Order';
import Furniture from '../Pages/Furniture';

// const basename = '/';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: '',
          element: <Navigate to="home" />,
        },
        {
          path: 'products',
          element: <Designs />,
        },
        {
          path: 'products/:designId',
          element: <SingleDesign />,
        },
        {
          path: 'furniture',
          element: <Furniture />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'order',
          element: <Order />,
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
