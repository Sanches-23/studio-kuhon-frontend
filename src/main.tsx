import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Utils/theme';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { store } from './API/Store/slices/store';
import { router } from './API/router';

const reactRoot = createRoot(document.getElementById('root')!);

reactRoot.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  </ThemeProvider>
);
