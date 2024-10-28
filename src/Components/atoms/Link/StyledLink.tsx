// ЦЕ ОСНОВА РОБОЧА АЛЕ НЕ ТАК ЯК Я ХОЧУ
// import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
//
// type LinkProps = MuiLinkProps & {
//   to: string;
//   underline?: 'none' | 'hover' | 'always';
// };
//
// const CustomLink = styled(MuiLink)<LinkProps>(({ theme }) => ({
//   textDecoration: 'none',
//   color: theme.palette.text.primary,
//   fontWeight: 500,
//   '&:hover': {
//     color: theme.palette.text.secondary,
//     textDecoration: 'underline',
//   },
// }));
//
// const StyledLink: React.FC<LinkProps> = ({ to, children, ...props }) => (
//   <CustomLink component={RouterLink} to={to} {...props}>
//     {children}
//   </CustomLink>
// );
//
// export default StyledLink;

// import { Link, LinkProps, SxProps, styled,  } from '@mui/material';
// import React, { ReactNode, useMemo } from 'react';
//
//
// type StyledLinkProps = LinkProps & {
//   to: string;
//   variant?: 'primary' | 'secondary' | 'text';
//   underline?: 'none' | 'hover' | 'always';
//   sx?: SxProps;
//   children: ReactNode;
// };
//
// const BaseLink = styled(Link)<StyledLinkProps>(({ theme }) => ({
//   textDecoration: 'none',
//   fontWeight: 500,
//   '&:hover': {
//     textDecoration: 'underline',
//   },
// }));
//
// const PrimaryLink = styled(BaseLink)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   '&:hover': {
//     color: theme.palette.primary.dark,
//   },
// }));
//
// const SecondaryLink = styled(BaseLink)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   '&:hover': {
//     color: theme.palette.secondary.dark,
//   },
// }));
//
// const TextLink = styled(BaseLink)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   '&:hover': {
//     color: theme.palette.text.secondary,
//   },
// }));
//
// const StyledLink: React.FC<StyledLinkProps> = ({ to, variant = 'primary', children, sx, ...props }) => {
//   const LinkComponent = useMemo(() => {
//     switch (variant) {
//       case 'primary':
//         return PrimaryLink;
//       case 'secondary':
//         return SecondaryLink;
//       case 'text':
//         return TextLink;
//       default:
//         return PrimaryLink;
//     }
//   }, [variant]);
//
//   return (
//     <LinkComponent component={Link} to={to} sx={sx} {...props}>
//       {children}
//     </LinkComponent>
//   );
// };
//
// export default StyledLink;
// це шось пробував

import { SxProps } from '@mui/material';
import React, { ReactNode, useMemo } from 'react';
import { AlwaysHoverLink } from './Styled/AlwaysHoverLink';
import { HoverLink } from './Styled/HoverLink';
import { NoneHoverLink } from './Styled/NoneHoverLink';

type LinkProps = {
  children: ReactNode;
  to: string;
  underline?: 'none' | 'hover' | 'always';
  sx?: SxProps;
};

export const StyledLink: React.FC<LinkProps> = ({
  children,
  to,
  underline,
  sx = {},
}) => {
  const LinkComponent = useMemo(() => {
    switch (underline) {
      case 'none':
        return NoneHoverLink;
      case 'always':
        return AlwaysHoverLink;
      case 'hover':
      default:
        return HoverLink;
    }
  }, [underline]);

  return (
    <LinkComponent to={to} sx={sx}>
      {children}
    </LinkComponent>
  );
};

// import { SxProps } from '@mui/material';
// import React, { ReactNode, useMemo, memo } from 'react';
// import { AlwaysHoverLink } from './Styled/AlwaysHoverLink';
// import { HoverLink } from './Styled/HoverLink';
// import { NoneHoverLink } from './Styled/NoneHoverLink';
//
// type LinkProps = {
//   children: ReactNode;
//   to: string;
//   underline?: 'none' | 'hover' | 'always';
//   sx?: SxProps;
// };
//
// const StyledLinkComponent: React.FC<LinkProps> = ({
//   children,
//   to,
//   underline = 'text',
//   sx = {},
// }) => {
//   const LinkComponent = useMemo(() => {
//     switch (underline) {
//       case 'none':
//         return NoneHoverLink;
//       case 'hover':
//         return HoverLink;
//       case 'always':
//       default:
//         return AlwaysHoverLink;
//     }
//   }, [underline]);
//
//   return (
//     <LinkComponent to={to} sx={sx}>
//       {children}
//     </LinkComponent>
//   );
// };
//
// export const StyledLink = memo(StyledLinkComponent);
