import { Typography } from '@mui/material';
import theme from '../../Utils/theme';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'body1';
  text: string;
  color?: string;
};

export const CustomTypography = ({ variant, text, color }: TypographyProps) => {
  return (
    <Typography
      variant={variant}
      style={{ color: color || theme.palette.text.primary }}
    >
      {text}
    </Typography>
  );
};
