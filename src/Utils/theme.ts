import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C00021',
      light: '#FF6700',
      dark: '#232323E5',
      contrastText: '#232323',
    },
    secondary: {
      main: '#00b0ff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#232323',
      secondary: '#757575',
      disabled: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '22px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '18px',
      fontWeight: 700,
    },
    body2: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '25px',
    },
  },
});

export default theme;
