import { styled } from '@mui/material';
import { BasicLink } from './BasicLink';

export const NavbarLink = styled(BasicLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  textUnderlineOffset: '4px',
}));
