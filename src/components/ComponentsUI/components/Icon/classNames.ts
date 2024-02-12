// types
import { IconShape } from './enums';
import { TIconShapes } from './types';

const classNamePrefix = 'Icon';
const classNameIconDownOutlined = `${classNamePrefix}DownOutlined`;
const classNameIconLeftOutlined = `${classNamePrefix}LeftOutlined`;
const classNameIconRightOutlined = `${classNamePrefix}RightOutlined`;
const classNameIconUpOutlined = `${classNamePrefix}UpOutlined`;

export const classNames: TIconShapes = {
  [IconShape.downOutlined]: classNameIconDownOutlined,
  [IconShape.leftOutlined]: classNameIconLeftOutlined,
  [IconShape.rightOutlined]: classNameIconRightOutlined,
  [IconShape.upOutlined]: classNameIconUpOutlined,
};
