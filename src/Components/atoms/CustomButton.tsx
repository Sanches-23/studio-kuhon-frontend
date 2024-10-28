import { Button } from '@mui/material';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
};

export const CustomButton = ({
  label,
  onClick,
  variant = 'contained',
  color = 'primary',
}: ButtonProps) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

//import React from 'react';
// import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
// import { styled } from '@mui/material/styles';
//
// interface ButtonProps extends MuiButtonProps {
//   variant?: 'contained' | 'outlined' | 'text';
// }
//
// const CustomButton = styled(MuiButton)(({ theme }) => ({
//   padding: theme.spacing(1, 2),
//   textTransform: 'none',
// }));
//
// const Button: React.FC<ButtonProps> = ({ children, variant = 'contained', ...props }) => {
//   return (
//     <CustomButton variant={variant} {...props}>
//       {children}
//     </CustomButton>
//   );
// };
//
// export default Button;
