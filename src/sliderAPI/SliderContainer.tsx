// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
// import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
// import 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';
// import 'swiper/css/autoplay';
// import { SliderItem } from './SliderItem';
// import { SliderNavigation } from './SliderNavigation';
// import { SliderProgress } from './SliderProgress';
// import { Box } from '@mui/material';
// import { StyledTypography } from '../../Components/atoms/Typography/StyledTypography';
// import theme from '../../Utils/theme';
//
// type SliderContainerProps = {
//   items: React.ReactNode[];
//   autoplay?: boolean;
//   loop?: boolean;
//   navigation?: boolean;
//   progress?: boolean;
// };
//
// export const SliderContainer: React.FC<SliderContainerProps> = ({
//   items,
//   autoplay = true,
//   loop = true,
//   navigation = true,
//   progress = true,
// }) => {
//   const swiperRef = useRef<SwiperRef | null>(null);
//
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         margin: '0 auto',
//       }}
//     >
//       <StyledTypography
//         type={'heading'}
//         text={'ВІДГУКИ НАШИХ КЛІЄНТІВ'}
//         sx={{
//           padding: '60px 135px 100px',
//           color: theme.palette.background.default,
//         }}
//       />
//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation, FreeMode, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={'auto'}
//         freeMode
//         // centeredSlides={false}
//         loop={loop}
//         autoplay={
//           autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
//         }
//         style={{ paddingLeft: '135px' }}
//       >
//         {items.map((item, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               width: 'auto',
//             }}
//           >
//             <SliderItem>{item}</SliderItem>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           gap: '13px',
//           padding: '75px 135px 90px',
//         }}
//       >
//         {progress && <SliderProgress swiperRef={swiperRef} />}
//         {navigation && <SliderNavigation swiperRef={swiperRef} />}
//       </Box>
//     </Box>
//   );
// };

import React, { useMemo, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { StyledSwiperSlideItem } from './StyledSwiperSlideItem';
import { SliderNavigation } from './SliderNavigation';
import { SliderProgress } from './SliderProgress';
import { Box, Button } from '@mui/material';
import { StyledLink } from '../Components/atoms/Link/StyledLink';

type SliderContainerProps = {
  items: React.ReactNode[];
  type: 'projects' | 'reviews';
  autoplay?: boolean;
  loop?: boolean;
  progress?: boolean;
};

export const SliderContainer: React.FC<SliderContainerProps> = ({
  items,
  type,
  autoplay = true,
  loop = true,
  progress = true,
}) => {
  const swiperSettings = useMemo(() => {
    switch (type) {
      case 'projects':
        return {
          slidesPerView: 1,
          centeredSlides: true,
          // spaceBetween: -1,
          style: { margin: '0px 135px 0' },
        };
      case 'reviews':
        return {
          slidesPerView: 'auto' as const,
          spaceBetween: 30,
          freeMode: true,
          style: { paddingLeft: '135px' },
        };
      default:
        return {
          style: { paddingLeft: '0px' },
        };
    }
  }, [type]);

  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, FreeMode, Autoplay]}
        loop={loop}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
        }
        {...swiperSettings}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: 'auto',
            }}
          >
            <StyledSwiperSlideItem type={type}>{item}</StyledSwiperSlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '15px',
          // padding: type === 'reviews' ? '75px 135px 90px' : '30px',
          padding: '75px 135px 90px',
          // boxSizing: 'content-box',
          // maxWidth: type === 'projects' ? '425px' : 'none',
          // margin: '0 auto', // Центрування контейнера
        }}
      >
        {type === 'projects' ? (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '425px',
                gap: '15px',
                justifyContent: 'space-between',
              }}
            >
              <SliderNavigation
                swiperRef={swiperRef}
                direction="prev"
                type={type}
              />
              {progress && <SliderProgress type={type} swiperRef={swiperRef} />}
              <SliderNavigation
                swiperRef={swiperRef}
                direction="next"
                type={type}
              />
            </Box>
            <StyledLink
              to="/products"
              type="navbar"
              sx={{
                fontSize: '24px',
              }}
            >
              УСІ ПРОЕКТИ
            </StyledLink>
          </>
        ) : (
          <
            //   sx={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   justifyContent: 'space-between',
            //   gap: '15px',
            // }}
          >
            {progress && <SliderProgress type={type} swiperRef={swiperRef} />}
            <SliderNavigation
              swiperRef={swiperRef}
              direction="prev"
              type={type}
            />
            <SliderNavigation
              swiperRef={swiperRef}
              direction="next"
              type={type}
            />
          </>
        )}
      </Box>
    </>
  );
};

//{/*<Box*/}
//       {/*  sx={{*/}
//       {/*    display: 'flex',*/}
//       {/*    alignItems: 'center',*/}
//       {/*    // justifyContent: 'space-between',*/}
//       {/*    gap: '15px',*/}
//       {/*    // padding: type === 'reviews' ? '75px 135px 90px' : '30px',*/}
//       {/*    padding: '75px 135px 90px',*/}
//       {/*    // boxSizing: 'content-box',*/}
//       {/*    // maxWidth: type === 'projects' ? '425px' : 'none',*/}
//       {/*    // margin: '0 auto', // Центрування контейнера*/}
//       {/*  }}*/}
//       {/*>*/}
//       {type === 'projects' ? (
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box
//             sx={{
//               display: 'flex',
//               gap: '15px',
//               alignItems: 'center',
//               boxSizing: 'content-box',
//               // justifyContent: 'space-between',
//               maxWidth: '425px',
//             }}
//           >
//             <SliderNavigation
//               swiperRef={swiperRef}
//               direction="prev"
//               type={type}
//             />
//             {progress && <SliderProgress type={type} swiperRef={swiperRef} />}
//             <SliderNavigation
//               swiperRef={swiperRef}
//               direction="next"
//               type={type}
//             />
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => console.log('Redirect to all projects')}
//             sx={{
//               padding: '8px 16px',
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//             }}
//           >
//             Усі проекти
//           </Button>
//         </Box>
//       ) : (
//         <>
//           {progress && <SliderProgress type={type} swiperRef={swiperRef} />}
//           <SliderNavigation
//             swiperRef={swiperRef}
//             direction="prev"
//             type={type}
//           />
//           <SliderNavigation
//             swiperRef={swiperRef}
//             direction="next"
//             type={type}
//           />
//         </>
//       )}
//       {/*</Box>*/}
