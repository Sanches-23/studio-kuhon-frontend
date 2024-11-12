import { createTheme } from '@mui/material/styles'; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MullerNextWideTrialThin from '../Assets/fonts/MULLERNEXTWIDETRIAL-THIN.OTF'; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MullerNextWideTrialRegular from '../Assets/fonts/MULLERNEXTWIDETRIAL-REGULAR.OTF'; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MullerNextWideTrialHeavy from '../Assets/fonts/MULLERNEXTWIDETRIAL-HEAVY.OTF'; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MullerNextWideTrialExtraBold from '../Assets/fonts/MULLERNEXTWIDETRIAL-EXTRABOLD.OTF';

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
      paper: '#FF6700',
    },
    text: {
      primary: '#232323',
      secondary: '#ffffff',
      disabled: '#BDBDBD',
    },
  },
  typography: {
    fontFamily: 'Muller Next Wide Trial, Arial, sans-serif',
    h1: {
      fontSize: '60px',
      fontWeight: 400,
      lineHeight: '75px',
    },
    h2: {
      fontSize: '40px',
      fontWeight: 400,
      lineHeight: '50px',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 400,
      lineHeight: '38px',
    },
    body1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '25px',
    },
    body2: {
      fontSize: '30px',
      fontWeight: 400,
      lineHeight: '38px',
    },
    caption: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '34px',
      color: '#232323BF',
    },
    // overline: {
    //   fontSize: '10px',
    //   fontWeight: 400,
    //   lineHeight: '12px',
    //   letterSpacing: '0.015em',
    //   color: '#09090B',
    // },
    // subtitle1: {
    //   fontSize: '16px',
    //   fontWeight: 500,
    //   lineHeight: '20px',
    //   letterSpacing: '0.0015em',
    //   color: '#09090B',
    // },
    // subtitle2: {
    //   fontSize: '16px',
    //   fontWeight: 700,
    //   lineHeight: '20px',
    //   letterSpacing: '0.0015em',
    //   color: '#09090B',
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Muller Next Wide Trial';
          src: url(${MullerNextWideTrialThin}) format('opentype');
          font-weight: 200;
          font-style: normal;
        }        
        @font-face {
          font-family: 'Muller Next Wide Trial';
          src: url(${MullerNextWideTrialRegular}) format('opentype');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Muller Next Wide Trial';
          src: url(${MullerNextWideTrialExtraBold}) format('opentype');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'Muller Next Wide Trial';
          src: url(${MullerNextWideTrialHeavy}) format('opentype');
          font-weight: 750;
          font-style: normal;
        }
      `,
    },
  },
});

export default theme;
