// import React from 'react';
// import { IconButton, styled } from '@mui/material';
// import { SvgIconComponent } from '@mui/icons-material';
//
// type NavigationButtonProps = {
//   icon: SvgIconComponent;
//   onClick: () => void;
//   variant?: 'primary' | 'secondary';
// };
//
// const StyledNavigationButton = styled(IconButton)<{ variant?: string }>(({
//   variant,
// }) => {
//   switch (variant) {
//     case 'primary':
//       return {
//         '&:hover': { backgroundColor: 'transparent' },
//       };
//     case 'secondary':
//       return {
//         '&:hover': { backgroundColor: 'red' },
//       };
//     default:
//       return {
//         '&:hover': { backgroundColor: 'blue' },
//       };
//   }
// });
//
// export const NavigationButton: React.FC<NavigationButtonProps> = ({
//   icon: Icon,
//   onClick,
//   variant = 'primary',
// }) => {
//   return (
//     <StyledNavigationButton variant={variant} onClick={onClick}>
//       <Icon fontSize="small" />
//     </StyledNavigationButton>
//   );
// };

import React, { useMemo } from 'react';
import {
  Add,
  ArrowBack,
  ArrowForward,
  Remove,
  SvgIconComponent,
} from '@mui/icons-material';
import { ReviewNavigationButton } from './Styled/ReviewNavigationButton';
import { ProjectNavigationButton } from './Styled/ProjectNavigationButton';

// type NavigationButtonProps = {
//   icon: SvgIconComponent;
//   onClick: () => void;
//   type?: 'reviews' | 'projects';
// };

type NavigationButtonProps = {
  direction: 'prev' | 'next';
  onClick: () => void;
  type?: 'reviews' | 'projects';
};

export const StyledNavigationButton: React.FC<NavigationButtonProps> = ({
  // icon: Icon,
  // onClick,
  // type,
  direction,
  onClick,
  type,
}) => {
  const Icon = useMemo<SvgIconComponent>(() => {
    if (type === 'reviews') {
      return direction === 'prev' ? ArrowBack : ArrowForward;
    }
    if (type === 'projects') {
      return direction === 'prev' ? Remove : Add;
    }
    return ArrowForward;
  }, [type, direction]);

  const NavigationButtonComponent = useMemo(() => {
    switch (type) {
      case 'projects':
        return ProjectNavigationButton;
      case 'reviews':
        return ReviewNavigationButton;
      default:
        return ReviewNavigationButton;
    }
  }, [type]);

  return (
    <NavigationButtonComponent onClick={onClick}>
      <Icon />
    </NavigationButtonComponent>
  );
};
