import { SxProps } from '@mui/material';
import React, { ReactNode, useMemo } from 'react';
import { FooterLink } from './Styled/FooterLink';
import { NavbarLink } from './Styled/NavbarLink';
import { NoneHoverLink } from './Styled/NoneHoverLink';

type LinkProps = {
  children: ReactNode;
  to: string;
  type?: 'navbar' | 'footer' | 'body';
  sx?: SxProps;
};

export const StyledLink: React.FC<LinkProps> = ({
  children,
  to,
  type,
  sx = {},
}) => {
  const LinkComponent = useMemo(() => {
    switch (type) {
      case 'navbar':
        return NavbarLink;
      case 'footer':
        return FooterLink;
      case 'body':
      default:
        return NoneHoverLink;
    }
  }, [type]);

  return (
    <LinkComponent to={to} sx={sx}>
      {children}
    </LinkComponent>
  );
};
