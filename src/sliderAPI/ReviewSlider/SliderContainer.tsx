import React, { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { SliderItem } from './SliderItem';
import { SliderNavigation } from './SliderNavigation';
import { SliderProgress } from './SliderProgress';
import { Box } from '@mui/material';
import { StyledTypography } from '../../Components/atoms/Typography/StyledTypography';
import theme from '../../Utils/theme';

type SliderContainerProps = {
  items: React.ReactNode[];
  autoplay?: boolean;
  loop?: boolean;
  navigation?: boolean;
  progress?: boolean;
};

export const SliderContainer: React.FC<SliderContainerProps> = ({
  items,
  autoplay = true,
  loop = true,
  navigation = true,
  progress = true,
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <Box
      sx={{
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <StyledTypography
        type={'heading'}
        text={'ВІДГУКИ НАШИХ КЛІЄНТІВ'}
        sx={{
          padding: '60px 135px 100px',
          color: theme.palette.background.default,
        }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Navigation, FreeMode, Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'}
        freeMode
        // centeredSlides={false}
        loop={loop}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
        }
        style={{ paddingLeft: '135px' }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: 'auto',
            }}
          >
            <SliderItem>{item}</SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '13px',
          padding: '75px 135px 90px',
        }}
      >
        {progress && <SliderProgress swiperRef={swiperRef} />}
        {navigation && <SliderNavigation swiperRef={swiperRef} />}
      </Box>
    </Box>
  );
};
