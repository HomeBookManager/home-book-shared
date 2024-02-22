import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import ButtonIcon from './ButtonIcon';
import IconUpOutlined from '../Icon/components/IconUpOutlined';

// others
import { className as classNameButtonIcon, classNames } from './classNames';

// types
import { ButtonSize } from '../Button/enums';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';

// utils
import { enumToArray } from '../../../../utils';
import { getByE2EAttribute } from '../../../../tests';
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';

const className = 'className';
const classNameCirclePulse = 'classNameCirclePulse';
const classNameIcon = 'classNameIcon';
const iconComponent = IconUpOutlined;

describe('ButtonIcon behaviors', () => {
  it('should render pulseEffect after click', async () => {
    // before
    const { container } = render(
      <ButtonIcon
        classNameCirclePulse={classNameCirclePulse}
        iconComponent={iconComponent}
      />,
    );
    const buttonIcon = getByE2EAttribute(container, E2EAttribute.buttonIcon);

    // action
    fireEvent.click(buttonIcon);

    // result
    await waitFor(() => {
      expect(buttonIcon.lastChild).toHaveClass(classNameCirclePulse);
    });
  });
});

describe('ButtonIcon props', () => {
  const mockCallBack = jest.fn();

  it('should pass className', () => {
    // before
    const { container } = render(
      <ButtonIcon className={className} iconComponent={iconComponent} />,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.buttonIcon)).toHaveClass(
      className,
    );
  });

  it('should pass classNameCirclePulse', () => {
    // before
    const { container } = render(
      <ButtonIcon
        classNameCirclePulse={classNameCirclePulse}
        iconComponent={iconComponent}
      />,
    );

    // result
    expect(container.querySelector(`.${classNameCirclePulse}`)).toHaveClass(
      classNameCirclePulse,
    );
  });

  it('should pass classNameIcon', () => {
    // before
    const { container } = render(
      <ButtonIcon
        classNameIcon={classNameIcon}
        iconComponent={iconComponent}
      />,
    );

    // result
    expect(container.querySelector(`.${classNameIcon}`)).toHaveClass(
      classNameIcon,
    );
  });

  it('should pass disabled', () => {
    // before
    const { container } = render(
      <ButtonIcon disabled iconComponent={iconComponent} />,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonIcon),
    ).toHaveAttribute('disabled');
  });

  it('should pass disablePulseEffect', () => {
    // before
    const { container } = render(
      <ButtonIcon disablePulseEffect iconComponent={iconComponent} />,
    );

    // find
    const buttonIcon = getByE2EAttribute(container, E2EAttribute.buttonIcon);

    // action
    fireEvent.click(buttonIcon);

    // result
    expect(buttonIcon.lastChild).toHaveTextContent('');
  });

  it('should pass e2eAttribute', () => {
    // before
    const { container } = render(
      <ButtonIcon
        e2eAttribute={E2EAttribute.buttonIcon}
        iconComponent={iconComponent}
      />,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonIcon),
    ).toHaveAttribute(getDataTestAttribute(E2EAttribute.buttonIcon));
  });

  it('should pass e2eValue', () => {
    // before
    const { container } = render(
      <ButtonIcon e2eValue="e2eValue" iconComponent={iconComponent} />,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonIcon),
    ).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.buttonIcon),
      'e2eValue',
    );
  });

  it('should pass forcedHover', () => {
    // before
    const { container } = render(
      <ButtonIcon iconComponent={iconComponent} forcedHover />,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.buttonIcon)).toHaveClass(
      classNames[classNameButtonIcon].modificators.forcedHover,
    );
  });

  it('should pass iconComponent', () => {
    // before
    const { container } = render(
      <ButtonIcon
        classNameIcon={classNameIcon}
        iconComponent={iconComponent}
      />,
    );

    // result
    expect(container.querySelector(`.${classNameIcon}`)).toHaveClass(
      iconComponent.name,
    );
  });

  it('should pass onClick', () => {
    // before
    const { container } = render(
      <ButtonIcon iconComponent={iconComponent} onClick={mockCallBack} />,
    );

    // action
    fireEvent.click(getByE2EAttribute(container, E2EAttribute.buttonIcon));

    // result
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should pass size', () => {
    // mock
    const sizes = enumToArray(ButtonSize) as Array<ButtonSize>;

    // before
    const { container } = render(
      <>
        {sizes.map((size) => (
          <ButtonIcon
            e2eValue={size}
            iconComponent={iconComponent}
            key={size}
            size={size}
          />
        ))}
      </>,
    );

    // result
    sizes.forEach((size) =>
      expect(
        getByE2EAttribute(container, E2EAttribute.buttonIcon, size),
      ).toHaveClass(classNames[classNameButtonIcon].modificators[size]),
    );
  });
});

describe('ButtonIcon snapshots', () => {
  it('should render Button', () => {
    // before
    const { asFragment } = render(<ButtonIcon iconComponent={iconComponent} />);

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
