import { styled } from '@mui/system';
import { BasicTypography } from './BasicTypography';

export const HeadingTypography = styled(BasicTypography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  color: theme.palette.text.primary,
}));
