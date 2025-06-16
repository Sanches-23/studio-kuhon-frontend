// import React, { ReactNode } from 'react';
// import { Box, styled } from '@mui/material';
//
// type SliderItemProps = {
//   children: ReactNode;
// };
//
// const StyledSliderItem = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   padding: '32px',
//   backgroundColor: theme.palette.background.default,
//   borderRadius: '32px',
//   boxSizing: 'border-box',
//   height: '400px',
// }));
//
// export const SliderItem: React.FC<SliderItemProps> = ({ children }) => (
//   <StyledSliderItem>{children}</StyledSliderItem>
// );

import React, { ReactNode, useMemo } from 'react';
import { Box, styled } from '@mui/material';

type SliderItemProps = {
  type: 'reviews' | 'projects';
  children: ReactNode;
};

const ProjectSwiperSlide = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  height: '620px',
}));
const ReviewSwiperSlide = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '32px',
  backgroundColor: theme.palette.background.default,
  borderRadius: '32px',
  boxSizing: 'border-box',
  height: '400px',
}));

export const StyledSwiperSlideItem: React.FC<SliderItemProps> = ({
  type,
  children,
}) => {
  const SwiperComponent = useMemo(() => {
    switch (type) {
      case 'projects':
        return ProjectSwiperSlide;
      case 'reviews':
        return ReviewSwiperSlide;
      default:
        return ReviewSwiperSlide;
    }
  }, [type]);

  return <SwiperComponent>{children}</SwiperComponent>;
};
