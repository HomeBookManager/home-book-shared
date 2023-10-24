import { FC } from 'react';

// components
import Typography from '../../Typography';

// types
import { TypographyFontType } from '../../enums';
import { TOmittedTypographyProps } from '../../types';

const H6: FC<TOmittedTypographyProps> = ({ children, ...restProps }) => (
  <Typography fontType={TypographyFontType.h6} {...restProps}>
    {children}
  </Typography>
);

export default H6;
