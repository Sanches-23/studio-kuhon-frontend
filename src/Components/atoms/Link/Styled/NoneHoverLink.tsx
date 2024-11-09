import { styled } from '@mui/material';
import { BasicLink } from './BasicLink';

export const NoneHoverLink = styled(BasicLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
}));
