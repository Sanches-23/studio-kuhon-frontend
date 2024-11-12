// // import React, { useRef } from 'react';
// // import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
// // import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import 'swiper/css/free-mode';
// // import 'swiper/css/autoplay';
// // import { SliderItem } from './SliderItem';
// // import { SliderNavigation } from './SliderNavigation';
// // import { SliderProgress } from './SliderProgress';
// // import { Box } from '@mui/material';
// //
// // type SliderContainerProps = {
// //   items: React.ReactNode[];
// //   slidesPerView?: number;
// //   autoplay?: boolean;
// //   loop?: boolean;
// //   navigation?: boolean;
// //   progress?: boolean;
// // };
// //
// // export const SliderContainer1: React.FC<SliderContainerProps> = ({
// //   items,
// //   slidesPerView = 3,
// //   autoplay = true,
// //   loop = true,
// //   navigation = true,
// //   progress = true,
// // }) => {
// //   const swiperRef = useRef<SwiperRef | null>(null);
// //
// //   return (
// //     <Box sx={{ position: 'relative' }}>
// //       <Swiper
// //         ref={swiperRef}
// //         modules={[Navigation, Pagination, FreeMode, Autoplay]}
// //         spaceBetween={10}
// //         slidesPerView={slidesPerView}
// //         freeMode={true}
// //         loop={loop}
// //         autoplay={
// //           autoplay ? { delay: 3000, disableOnInteraction: false } : false
// //         }
// //         pagination={{ clickable: true, hideOnClick: true }}
// //         onSwiper={(swiper) => {
// //           if (swiperRef.current) {
// //             swiperRef.current.swiper = swiper;
// //           }
// //         }}
// //         style={{ paddingBottom: '40px' }}
// //       >
// //         {items.map((item, index) => (
// //           <SwiperSlide key={index}>
// //             <SliderItem>{item}</SliderItem>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //       {navigation && <SliderNavigation swiperRef={swiperRef} />}
// //       {progress && <SliderProgress swiperRef={swiperRef} />}
// //     </Box>
// //   );
// // };
//
// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
// import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';
// import 'swiper/css/autoplay';
// import { SliderItem } from './SliderItem';
// import { SliderNavigation } from './SliderNavigation';
// import { SliderProgress } from './SliderProgress';
// import { Box } from '@mui/material';
//
// type SliderContainerProps = {
//   items: React.ReactNode[];
//   slidesPerView?: number;
//   autoplay?: boolean;
//   loop?: boolean;
//   navigation?: boolean;
//   progress?: boolean;
// };
//
// export const SliderContainer1: React.FC<SliderContainerProps> = ({
//   items,
//   slidesPerView = 3,
//   autoplay = true,
//   loop = true,
//   navigation = true,
//   progress = true,
// }) => {
//   const swiperRef = useRef<SwiperRef | null>(null);
//
//   return (
//     <Box sx={{ position: 'relative' }}>
//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation, FreeMode, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={slidesPerView}
//         freeMode={true}
//         loop={loop}
//         autoplay={
//           autoplay ? { delay: 3000, disableOnInteraction: false } : false
//         }
//         onSwiper={(swiper) => {
//           if (swiperRef.current) {
//             swiperRef.current.swiper = swiper;
//           }
//         }}
//         style={{ paddingBottom: '40px' }}
//       >
//         {items.map((item, index) => (
//           <SwiperSlide key={index}>
//             <SliderItem>{item}</SliderItem>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {navigation && <SliderNavigation swiperRef={swiperRef} />}
//       {progress && <SliderProgress swiperRef={swiperRef} />}
//     </Box>
//   );
// };

import React, { useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { SliderItem } from './SliderItem';
import { SliderNavigation } from './SliderNavigation';
import { SliderProgress } from './SliderProgress';
import { Box } from '@mui/material';
import { StyledTypography } from '../../Components/atoms/Typography/StyledTypography';

type SliderContainerProps = {
  items: React.ReactNode[];
  // slidesPerView?: number;
  autoplay?: boolean;
  loop?: boolean;
  navigation?: boolean;
  progress?: boolean;
};

export const SliderContainer: React.FC<SliderContainerProps> = ({
  items,
  // slidesPerView = 3,
  autoplay = true,
  loop = true,
  navigation = true,
  progress = true,
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <Box sx={{ position: 'relative', backgroundColor: 'red' }}>
      <StyledTypography
        type={'heading'}
        text={'ВІДГУКИ НАШИХ КЛІЄНТІВ'}
        sx={{ color: 'white' }}
      />
      <Swiper
        ref={swiperRef}
        modules={[Navigation, FreeMode, Autoplay]}
        spaceBetween={30}
        // slidesPerView={slidesPerView}
        slidesPerView={'auto'}
        freeMode={true}
        loop={loop}
        autoplay={
          autoplay ? { delay: 30000, disableOnInteraction: false } : false
        }
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current.swiper = swiper;
          }
        }}
        // style={{ paddingBottom: '40px' }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              minWidth: '300px',
              maxWidth: '600px',
              width: 'fit-content',
              boxSizing: 'border-box',
              height: '400px',
              borderRadius: '32px',
              backgroundColor: 'black',
            }}
          >
            <SliderItem>{item}</SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      {navigation && <SliderNavigation swiperRef={swiperRef} />}
      {progress && <SliderProgress swiperRef={swiperRef} />}
    </Box>
  );
};
