import { styled } from '@mui/material';
import { BasicLink } from './BasicLink';

export const FooterLink = styled(BasicLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  // lineHeight: theme.typography.body2.lineHeight,
  textUnderlineOffset: '8px',
}));
