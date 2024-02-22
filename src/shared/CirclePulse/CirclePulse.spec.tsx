import { render, waitFor } from '@testing-library/react';

// components
import CirclePulse from './CirclePulse';

// others
import { className as classNameCirclePulse, classNames } from './classNames';

const animationDuration = 1000;
const className = 'className';
const mockCallBack = jest.fn();
const pulseElements = [];

describe('CirclePulse behaviors', () => {
  it('should have proper animation duration', () => {
    // before
    const { container } = render(
      <CirclePulse
        animationDuration={animationDuration}
        className={'Test__pulse'}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    expect(
      container.querySelector(`.${classNames[classNameCirclePulse]}`),
    ).toHaveStyle('animation-duration: 1000ms');
  });

  it('should fire onclick event after end the end of animation', async () => {
    // before
    render(
      <CirclePulse
        animationDuration={0}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    await waitFor(() => {
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

describe('CirclePulse props', () => {
  it('should pass animationDuration', () => {
    // before
    const { container } = render(
      <CirclePulse
        animationDuration={animationDuration}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    expect(
      container.querySelector(`.${classNames[classNameCirclePulse]}`),
    ).toHaveAttribute('style', `animation-duration: ${animationDuration}ms;`);
  });

  it('should pass className', () => {
    // before
    const { container } = render(
      <CirclePulse
        animationDuration={animationDuration}
        className={className}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    expect(
      container.querySelector(`.${classNames[classNameCirclePulse]}`),
    ).toHaveClass(className);
  });

  it('should pass setPulseElements', async () => {
    // before
    render(
      <CirclePulse
        animationDuration={0}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    await waitFor(() => {
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

describe('CirclePulse snapshots', () => {
  it('should render CirclePulse', () => {
    // before
    const { asFragment } = render(
      <CirclePulse
        animationDuration={animationDuration}
        pulseElements={pulseElements}
        setPulseElements={mockCallBack}
      />,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
