import cx from 'classnames';
import { ButtonHTMLAttributes, FC, useState } from 'react';

// components
import CirclePulse, {
  TCirclePulseProps,
} from '../../../../shared/CirclePulse/CirclePulse';
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';
import Icon, { TIconProps } from '../Icon/Icon';

// hooks
import { useClickInteraction } from './hooks/useClickInteraction';
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameButtonIcon, classNames } from './classNames';

// styles
import './styles/button-icon.scss';

// types
import { ButtonSize } from '../Button/enums';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';

export type TButtonIconProps = Omit<
  ButtonHTMLAttributes<HTMLElement>,
  'children' | 'disabled'
> & {
  className?: string;
  classNameCirclePulse?: string;
  classNameIcon?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  e2eAttribute?: string;
  e2eValue?: number | string;
  forcedHover?: boolean;
  iconComponent: TIconProps['iconComponent'];
  size?: ButtonSize;
};

export const ButtonIcon: FC<TButtonIconProps> = ({
  className = '',
  classNameCirclePulse = '',
  classNameIcon = '',
  disabled = false,
  disablePulseEffect = false,
  e2eAttribute = E2EAttribute.buttonIcon,
  e2eValue = '',
  forcedHover = false,
  iconComponent,
  onClick = null,
  size = ButtonSize.medium,
  type = 'button',
  ...restProps
}) => {
  const { classNamesWithTheme } = useTheme(classNames);

  const [pulseElements, setPulseElements] = useState<
    TCirclePulseProps['pulseElements']
  >([]);

  const onClickHandler = useClickInteraction(
    disablePulseEffect,
    onClick,
    pulseElements,
    setPulseElements,
  );

  return (
    <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
      <button
        className={cx(
          classNamesWithTheme[classNameButtonIcon].name,
          {
            [classNamesWithTheme[classNameButtonIcon].modificators.forcedHover]:
              forcedHover,
          },
          classNamesWithTheme[classNameButtonIcon].modificators[size],
          className,
        )}
        disabled={disabled}
        onClick={onClickHandler}
        type={type}
        {...restProps}
      >
        <Icon
          className={cx(
            classNameIcon,
            classNameCirclePulse,
            classNamesWithTheme.icon.name,
            classNamesWithTheme.icon.modificators[size],
          )}
          forcedHover
          iconComponent={iconComponent}
        />
        {pulseElements.map((key) => (
          <CirclePulse
            animationDuration={1000}
            className={cx(
              classNameCirclePulse,
              classNamesWithTheme.circlePulse,
            )}
            pulseElements={pulseElements}
            setPulseElements={setPulseElements}
            key={key}
          />
        ))}
      </button>
    </E2EDataAttribute>
  );
};

export default ButtonIcon;
