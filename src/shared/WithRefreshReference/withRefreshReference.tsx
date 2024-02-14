import { FC } from 'react';

// utils
import { generateID } from '../../utils/common/generateID';

export const withRefreshReference: <T>(
  Component: FC<T>,
) => (props: T) => JSX.Element =
  <T,>(Icon: FC<T>) =>
  (props: T) => <Icon key={generateID()} {...props} />;

export default withRefreshReference;
