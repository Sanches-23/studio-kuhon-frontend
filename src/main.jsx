import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Utils/theme.js';
import { store } from './API/Store/store.js';
import { router } from './API/router.jsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <Provider store={store}>
        {/*<App />*/}
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  </ThemeProvider>
);
