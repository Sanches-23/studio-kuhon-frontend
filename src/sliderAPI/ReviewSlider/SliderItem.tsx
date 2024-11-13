import React, { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

type SliderItemProps = {
  children: ReactNode;
};

const StyledSliderItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '32px',
  backgroundColor: theme.palette.background.default,
  borderRadius: '32px',
  boxSizing: 'border-box',
  height: '400px',
}));

export const SliderItem: React.FC<SliderItemProps> = ({ children }) => (
  <StyledSliderItem>{children}</StyledSliderItem>
);
