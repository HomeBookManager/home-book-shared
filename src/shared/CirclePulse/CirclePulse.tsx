import cx from 'classnames';
import { FC, useEffect, useRef } from 'react';

// others
import { className as classNameCirclePulse, classNames } from './classNames';

// styles
import './styles/circle-pulse.scss';

export type TCirclePulseProps = {
  animationDuration: number;
  className?: string;
  pulseElements: Array<string>;
  setPulseElements: (pulseElements: Array<string>) => void;
};

const CirclePulse: FC<TCirclePulseProps> = ({
  animationDuration,
  className,
  pulseElements,
  setPulseElements,
}) => {
  const startedRef = useRef(new Date().getTime());

  useEffect(() => {
    const remainingTime =
      animationDuration - (new Date().getTime() - startedRef.current);

    const timer = setTimeout(() => {
      setPulseElements(pulseElements.slice(1));
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [pulseElements]);

  return (
    <span
      className={cx(className, classNames[classNameCirclePulse])}
      style={{ animationDuration: `${animationDuration}ms` }}
    />
  );
};

export default CirclePulse;
