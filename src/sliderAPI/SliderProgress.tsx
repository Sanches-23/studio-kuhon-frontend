import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, useTheme } from '@mui/material';
import { SwiperRef } from 'swiper/react';

type SliderProgressProps = {
  swiperRef: React.RefObject<SwiperRef | null>;
  type: 'projects' | 'reviews';
};

export const SliderProgress: React.FC<SliderProgressProps> = ({
  swiperRef,
  type,
}) => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.on('slideChange', () => {
        // setProgress((swiper.realIndex / (swiper.slides.length - 1)) * 100);
        const totalSlides = swiper.slides.length;
        const currentIndex = swiper.realIndex + 1;
        setProgress((currentIndex / totalSlides) * 100);
      });
    }
  }, [swiperRef]);

  return (
    <Box
      sx={{
        // width: '100%',
        width: '100vw',
        // width: 'auto',
        // maxWidth: '100vw',
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: '6px',
          // borderRadius: '2px',
          // backgroundColor: '#FFFFFF3A',
          backgroundColor: type === 'reviews' ? '#FFFFFF3A' : '#735C5D1A',
          '& .MuiLinearProgress-bar': {
            backgroundColor:
              type === 'reviews'
                ? theme.palette.background.default
                : theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
};
