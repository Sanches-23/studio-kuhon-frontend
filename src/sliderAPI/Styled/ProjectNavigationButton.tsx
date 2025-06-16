import { IconButton, styled } from '@mui/material';

export const ProjectNavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));
