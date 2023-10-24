import { FC } from 'react';

// components
import Typography from '../../Typography';

// types
import { TypographyFontType } from '../../enums';
import { TOmittedTypographyProps } from '../../types';

const H4: FC<TOmittedTypographyProps> = ({ children, ...restProps }) => (
  <Typography fontType={TypographyFontType.h4} {...restProps}>
    {children}
  </Typography>
);

export default H4;
