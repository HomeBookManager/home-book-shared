// others
import { FC, omit, TIconBasicProps } from './imports';

export const IconUpOutlined: FC<TIconBasicProps> = ({
  className = '',
  fill = '',
  ...restProps
}) => (
  <svg
    className={className}
    fill="none"
    height="16px"
    viewBox="64 64 896 896"
    width="16px"
    {...omit(restProps, 'stroke')}
  >
    <path
      d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
      fill={fill}
    ></path>
  </svg>
);

export default IconUpOutlined;
