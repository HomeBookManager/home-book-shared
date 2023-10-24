import { FC } from 'react';

// components
import Typography from '../../Typography';

// types
import { TypographyFontType } from '../../enums';
import { TOmittedTypographyProps } from '../../types';

const P: FC<TOmittedTypographyProps> = ({ children, ...restProps }) => (
  <Typography fontType={TypographyFontType.p} {...restProps}>
    {children}
  </Typography>
);

export default P;
