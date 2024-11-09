import React from 'react';
import { Box, Typography } from '@mui/material';
// import TestimonialsSlider from '../sliderAPI/TestimonialsSlider';
// import {
//   SliderContainer,
//   SliderHeader,
//   SliderContent,
//   SliderItem,
// } from '../sliderAPI/ReviewSlider/index';
// import { TestSlider2 } from '../sliderAPI/TestSlider2';

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <Typography variant="h1">Home</Typography> {/*ПОМІНЯЙ НА КАСТОМНЕ */}
      {/*<Box sx={{ padding: 4 }}>*/}
      {/*  <SliderContainer>*/}
      {/*    <SliderHeader title="Мої проекти" />*/}
      {/*    <SliderContent>*/}
      {/*      <SliderItem title="Проект 1" description="Опис проекту 1" />*/}
      {/*      <SliderItem title="Проект 2" description="Опис проекту 2" />*/}
      {/*      <SliderItem title="Проект 3" description="Опис проекту 3" />*/}
      {/*      <SliderItem title="Проект 4" description="Опис проекту 4" />*/}
      {/*      <SliderItem title="Проект 5" description="Опис проекту 5" />*/}
      {/*    </SliderContent>*/}
      {/*  </SliderContainer>*/}
      {/*</Box>*/}
      {/*<TestimonialsSlider />*/}
      {/*<TestSlider2 />*/}
    </Box>
  );
};

export default Home;
