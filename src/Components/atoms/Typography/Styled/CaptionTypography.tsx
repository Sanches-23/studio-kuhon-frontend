import { styled } from '@mui/system';
import { BasicTypography } from './BasicTypography';

export const CaptionTypography = styled(BasicTypography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,
  color: theme.typography.caption.color,
}));
