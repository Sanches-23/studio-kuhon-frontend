// import React, { useMemo } from 'react';
// import { SxProps, Box } from '@mui/material';
//
// type SvgIconProps = {
//   // svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   svg: string;
//   sx?: SxProps;
// };
//
// const BasicSvgIcon: React.FC<SvgIconProps> = ({ svg, sx = {} }) => {
//   return (
//     <Box
//       component="img"
//       src={svg}
//       alt="Logo"
//       sx={{ display: 'inline-block', ...sx }}
//     />
//   );
// };
//
// export const SvgIcon: React.FC<SvgIconProps> = ({ svg, sx = {} }) => {
//   const SvgComponent = useMemo(() => {
//     return BasicSvgIcon;
//   }, []);
//
//   return <SvgComponent svg={svg} sx={sx} />;
// };

import React from 'react';
import { SxProps, Box } from '@mui/material';

type SvgIconProps = {
  // svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  svg: string;
  sx?: SxProps;
};

export const SvgIcon: React.FC<SvgIconProps> = ({ svg, sx = {} }) => {
  return (
    <Box
      component="img"
      src={svg}
      alt="Logo"
      sx={{ display: 'block', maxWidth: '100%', ...sx }}
    />
  );
};
