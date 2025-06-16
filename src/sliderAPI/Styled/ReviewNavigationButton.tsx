import { IconButton, styled } from '@mui/material';

export const ReviewNavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.dark,
  },
}));
