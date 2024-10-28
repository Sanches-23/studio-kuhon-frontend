// import React from 'react';
// import { SxProps, Box } from '@mui/material';
//
// interface SvgIconProps {
//   svg: string;
//   sx?: SxProps;
// }
//
// const SvgIcon: React.FC<SvgIconProps> = ({ svg, sx }) => {
//   return (
//     // <Box
//     //   component="span"
//     //   dangerouslySetInnerHTML={{ __html: svg }}
//     //   sx={{ display: 'inline-block', ...sx }}
//     // />
//     <Box
//       component="img"
//       src={svg}
//       alt="Logo"
//       sx={{ display: 'inline-block', ...sx }}
//     />
//   );
// };
//
// export default SvgIcon;

import React, { useMemo } from 'react';
import { SxProps, Box } from '@mui/material';

type SvgIconProps = {
  // svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  svg: string;
  sx?: SxProps;
};

const BasicSvgIcon: React.FC<SvgIconProps> = ({ svg, sx = {} }) => {
  return (
    <Box
      component="img"
      src={svg}
      alt="Logo"
      sx={{ display: 'inline-block', ...sx }}
    />
  );
};

export const SvgIcon: React.FC<SvgIconProps> = ({ svg, sx = {} }) => {
  const SvgComponent = useMemo(() => {
    return BasicSvgIcon;
  }, []);

  return <SvgComponent svg={svg} sx={sx} />;
};
