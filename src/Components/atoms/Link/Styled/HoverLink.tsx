import { styled } from '@mui/material';
import { BasicLink } from './BasicLink';

export const HoverLink = styled(BasicLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',

  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,

  textUnderlineOffset: '4px',
  textDecorationThickness: '2px',
  '&:hover': {
    // color: theme.palette.text.secondary,
    textDecoration: 'underline',
  },
}));
