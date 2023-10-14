import { fireEvent, render, waitFor } from '@testing-library/react';

// @home-book
import { Theme } from 'home-book-types';

// core
import { ContextProvider } from './ContextProvider';

// mocks
import Sample from './mock/Sample';

describe('ContextProvider behaviors', () => {
  it('should have light mode', () => {
    // before
    const { container } = render(
      <ContextProvider>
        <Sample />
      </ContextProvider>,
    );

    // result
    expect(container).toHaveTextContent(Theme.light);
  });

  it('should have dark mode after click', async () => {
    // before
    const { container, getByText } = render(
      <ContextProvider>
        <Sample />
      </ContextProvider>,
    );

    // action
    fireEvent.click(getByText('Click'));

    // result
    await waitFor(() => {
      expect(container.firstChild?.firstChild).toHaveTextContent(Theme.dark);
    });
  });
});
