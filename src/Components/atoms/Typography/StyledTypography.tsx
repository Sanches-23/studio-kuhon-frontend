import React, { useMemo } from 'react';
import { SxProps } from '@mui/material';
import { HeadingTypography } from './Styled/HeadingTypography';
import { CaptionTypography } from './Styled/CaptionTypography';
import { ParagraphTypography } from './Styled/ParagraphTypography';
import { BasicTypography } from './Styled/BasicTypography';

type TypographyProps = {
  type?: 'heading' | 'paragraph' | 'caption';
  text: string;
  sx?: SxProps;
};

export const StyledTypography: React.FC<TypographyProps> = ({
  type,
  text,
  sx = {},
  ...rest
}) => {
  const TypographyComponent = useMemo(() => {
    switch (type) {
      case 'heading':
        return HeadingTypography;
      case 'caption':
        return CaptionTypography;
      case 'paragraph':
        return ParagraphTypography;
      default:
        return BasicTypography;
    }
  }, [type]);

  return (
    <TypographyComponent sx={sx} {...rest}>
      {text}
    </TypographyComponent>
  );
};
