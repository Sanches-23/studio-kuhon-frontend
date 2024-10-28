import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material';

export const BasicLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 500,
  color: theme.palette.text.primary,
  fontSize: theme.typography.body1.fontSize,
  '&.MuiLink-root': {
    cursor: 'pointer',
  },
}));
