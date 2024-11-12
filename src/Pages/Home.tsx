import React from 'react';
import { Box, Typography } from '@mui/material';
import { SliderContainer } from '../sliderAPI/ReviewSlider';
import reviewsData from '../sliderAPI/ReviewSlider/reviews.json';
import { StyledTypography } from '../Components/atoms/Typography/StyledTypography';
// import TestimonialsSlider from '../sliderAPI/TestimonialsSlider';
// import { TestSlider2 } from '../sliderAPI/TestSlider2';

type Review = {
  id: number;
  name: string;
  city: string;
  text: string;
};

const Home: React.FC = () => {
  const reviews: Review[] = reviewsData;
  const items = reviews.map((review) => (
    <Box
      key={review.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <StyledTypography type={'caption'} text={review.text}></StyledTypography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <StyledTypography
          type={'caption'}
          text={review.name}
        ></StyledTypography>
        <StyledTypography
          text={review.city}
          sx={{ fontSize: '16px', color: '#23232380' }}
        ></StyledTypography>
      </Box>
    </Box>
  ));

  return (
    <Box
      sx={{
        maxWidth: 1440,
        margin: '0 auto',
      }}
    >
      <Typography variant="h1">Home</Typography> {/*ПОМІНЯЙ НА КАСТОМНЕ */}
      {/*<TestimonialsSlider />*/}
      {/*<TestSlider2 />*/}
      {/*<SliderContainer items={items} slidesPerView={3} />*/}
      <SliderContainer items={items} />
    </Box>
  );
};

export default Home;
