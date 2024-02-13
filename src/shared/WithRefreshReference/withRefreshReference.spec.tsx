import { render } from '@testing-library/react';

// components
import withRefreshReference from './withRefreshReference';

describe('withRefreshReference snapshots', () => {
  it('should render component with refresh reference', () => {
    // mock
    const Component = withRefreshReference(() => <></>);

    //before
    const { asFragment } = render(<Component />);

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
