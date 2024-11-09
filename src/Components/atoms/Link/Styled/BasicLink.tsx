import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material';

export const BasicLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  fontFamily: theme.typography.fontFamily,
  // textDecorationThickness: '2px' /*чомусь не спрацьовує*/,
  '&.MuiLink-root': {
    cursor: 'pointer',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
}));
