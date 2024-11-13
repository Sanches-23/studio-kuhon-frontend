import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, useTheme } from '@mui/material';
import { SwiperRef } from 'swiper/react';

type SliderProgressProps = {
  swiperRef: React.RefObject<SwiperRef | null>;
};

export const SliderProgress: React.FC<SliderProgressProps> = ({
  swiperRef,
}) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on('slideChange', () => {
        setProgress((swiper.realIndex / (swiper.slides.length - 1)) * 100);
      });
    }
  }, [swiperRef]);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: '6px',
          borderRadius: '2px',
          backgroundColor: '#FFFFFF3A',
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.background.default,
          },
        }}
      />
    </Box>
  );
};
