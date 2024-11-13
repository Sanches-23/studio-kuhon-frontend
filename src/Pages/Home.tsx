import React from 'react';
import { Box, useTheme } from '@mui/material';
import { SliderContainer } from '../sliderAPI/ReviewSlider';
import reviewsData from '../sliderAPI/ReviewSlider/reviews.json';
import { StyledTypography } from '../Components/atoms/Typography/StyledTypography';

type Review = {
  id: number;
  name: string;
  city: string;
  text: string;
};

const Home: React.FC = () => {
  const theme = useTheme();
  const items = reviewsData.map((review: Review) => {
    const textLength = review.text.length;
    const containerWidth = Math.min(70 + textLength * 2, 1000);
    return (
      <Box
        key={review.id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: `${containerWidth}px`,
        }}
      >
        <StyledTypography
          type={'caption'}
          text={review.text}
        ></StyledTypography>
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
    );
  });

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'lightgray',
        }}
      >
        AAAAAAAAAAAAA
      </Box>
      <Box sx={{ backgroundColor: theme.palette.primary.main }}>
        <SliderContainer items={items} />
      </Box>
    </Box>
  );
};

export default Home;
