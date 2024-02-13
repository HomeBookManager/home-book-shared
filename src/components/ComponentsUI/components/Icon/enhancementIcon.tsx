import { FC } from 'react';

// types
import { TIconProps } from './Icon';

// utils
import { generateID } from '../../../../utils/common/generateID';

export const enhancementIcon: (
  Icon: FC<TIconProps>,
) => (props: TIconProps) => JSX.Element =
  (Icon: FC<TIconProps>) => (props: TIconProps) => {
    const key = generateID();

    return <Icon key={key} {...props} />;
  };

export default enhancementIcon;
