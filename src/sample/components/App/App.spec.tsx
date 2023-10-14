import { render } from '@testing-library/react';

// components
import App from './App';

describe('AppInitializer snapshots', () => {
  it('should render AppInitializer', () => {
    // before
    const { asFragment } = render(<App />);

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
