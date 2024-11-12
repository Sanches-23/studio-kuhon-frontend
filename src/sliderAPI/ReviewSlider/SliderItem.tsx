// import React, { ReactNode } from 'react';
// import { Box, SxProps } from '@mui/material';
//
// type SliderItemProps = {
//   children: ReactNode;
//   sx?: SxProps;
// };
//
// export const SliderItem: React.FC<SliderItemProps> = ({
//   children,
//   sx = {},
// }) => {
//   return (
//     <Box
//       sx={{
//         ...sx,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       {children}
//     </Box>
//   );
// };

// import React, { ReactNode } from 'react';
// import { Box, SxProps } from '@mui/material';
//
// type SliderItemProps = {
//   children: ReactNode;
//   sx?: SxProps;
// };
//
// export const SliderItem: React.FC<SliderItemProps> = ({
//   children,
//   sx = {},
// }) => {
//   return (
//     <Box
//       sx={{
//         ...sx,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         backgroundColor: 'white',
//         padding: '16px',
//         minHeight: '200px',
//       }}
//     >
//       {children}
//     </Box>
//   );
// };

import React, { ReactNode } from 'react';
import { Box, SxProps, styled } from '@mui/material';

type SliderItemProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const StyledSliderItem = styled(Box)(({ theme }) => ({
  // display: 'flex',
  // borderRadius: '32px',
  // backgroundColor: theme.palette.background.default,
  // padding: '32px',
  // boxSizing: 'border-box',
  // height: '400px',

  display: 'flex',
  flexDirection: 'column',
  // borderRadius: '32px',
  backgroundColor: theme.palette.background.default,
  padding: '32px',
  // width: 'fit-content',
  // maxWidth: '600px',
  // boxSizing: 'border-box',
  // overflow: 'hidden',
  // height: '400px',
}));

export const SliderItem: React.FC<SliderItemProps> = ({
  children,
  sx = {},
}) => {
  return <StyledSliderItem sx={sx}>{children}</StyledSliderItem>;
};
