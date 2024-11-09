import { styled, Typography } from '@mui/material';

export const BasicTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  color: theme.palette.text.primary /**/,
  textDecoration: 'none',
}));
