import { render } from '@testing-library/react';

// components
import E2EDataAttribute from './E2EDataAttribute';

// types
import { E2EAttribute } from './enums';

describe('E2EDataAttribute snapshots', () => {
  it('should render E2EDataAttribute', () => {
    // before
    const { asFragment } = render(
      <E2EDataAttribute type={E2EAttribute.test}>
        <span>child</span>
      </E2EDataAttribute>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with value', () => {
    // before
    const { asFragment } = render(
      <E2EDataAttribute type={E2EAttribute.test} value="test">
        <span>child</span>
      </E2EDataAttribute>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without attribute id', () => {
    // before
    const { asFragment } = render(
      <E2EDataAttribute>
        <span>child</span>
      </E2EDataAttribute>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
