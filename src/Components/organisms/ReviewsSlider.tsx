import React from 'react';
import { Box, useTheme } from '@mui/material';
import reviewsData from '../../sliderAPI/ReviewSlider/reviews.json';
import { StyledTypography } from '../atoms/Typography/StyledTypography';
import { SliderContainer } from '../../sliderAPI';

type Review = {
  name: string;
  city: string;
  text: string;
};

const ReviewsSlider: React.FC = () => {
  const theme = useTheme();
  const items = reviewsData.map((review: Review, index) => {
    const textLength = review.text.length;
    const containerWidth = Math.min(70 + textLength * 2, 1000);
    return (
      <Box
        key={index}
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
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Box
        sx={{
          // position: 'relative',
          margin: '0 auto',
        }}
      >
        <StyledTypography
          type={'heading'}
          text={'ВІДГУКИ НАШИХ КЛІЄНТІВ'}
          sx={{
            padding: '90px 135px',
            color: theme.palette.background.default,
          }}
        />
        <SliderContainer
          items={items}
          type="reviews"
          autoplay={true}
          loop={true}
          progress={true}
        />
      </Box>
    </Box>
  );
};

export default ReviewsSlider;
