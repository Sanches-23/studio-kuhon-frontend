import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { SwiperRef } from 'swiper/react';

type SliderNavigationProps = {
  swiperRef: React.RefObject<SwiperRef | null>;
};

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
  swiperRef,
}) => {
  const theme = useTheme();

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
          '&:hover': {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.dark,
          },
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
          '&:hover': {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.dark,
          },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};
