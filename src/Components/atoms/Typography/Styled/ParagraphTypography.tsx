import { styled } from '@mui/system';
import { BasicTypography } from './BasicTypography';

export const ParagraphTypography = styled(BasicTypography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  color: theme.palette.text.primary /**/,
}));
