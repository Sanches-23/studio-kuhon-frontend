import { styled } from '@mui/system';
import { BasicTypography } from './BasicTypography';

export const CaptionTypography = styled(BasicTypography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.h1.lineHeight,
  color: theme.palette.text.primary /**/,
}));
