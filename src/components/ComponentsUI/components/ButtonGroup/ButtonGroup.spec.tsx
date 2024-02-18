import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

// others
import { classNames as classNamesButtonGroup } from './classNames';
import {
  className as classNameButton,
  classNames as classNamesButton,
} from '../Button/classNames';
import { RIPPLE_EFFECT_MODIFICATOR } from '../../../../hooks';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from '../Button/enums';
import { ButtonGroupOrientation } from './enums';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';

// utils
import { getByE2EAttribute } from '../../../../tests/testHelpers';
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';
import { enumToArray } from '../../../../utils';

const contents = ['Button 1', 'Button 2', 'Button 3'];

const children = (
  <>
    {contents.map((content, index) => (
      <Button e2eValue={index} key={content}>
        {content}
      </Button>
    ))}
  </>
);

const className = 'className';

describe('ButtonGroup behaviors', () => {
  it('should render rippleEffect after click for every button', async () => {
    // before
    const { container } = render(<ButtonGroup>{children}</ButtonGroup>);

    for (let i = 0; i < contents.length; i++) {
      // find
      const button = getByE2EAttribute(container, E2EAttribute.button, i);

      // action
      fireEvent.click(button);

      // result
      await waitFor(
        () => {
          expect(button.lastChild).toHaveClass(
            `${classNamesButton[classNameButton].name}--${RIPPLE_EFFECT_MODIFICATOR}`,
          );
        },
        { timeout: 100 },
      );
    }
  });
});

describe('ButtonGroup props', () => {
  it('should pass children', () => {
    // before
    const { container } = render(<ButtonGroup>{children}</ButtonGroup>);

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(
        getByE2EAttribute(container, E2EAttribute.button, i),
      ).toHaveTextContent(contents[i]);
    }
  });

  it('should pass className', () => {
    // before
    const { container } = render(
      <ButtonGroup className={className}>{children}</ButtonGroup>,
    );

    // result
    expect(getByE2EAttribute(container, E2EAttribute.buttonGroup)).toHaveClass(
      className,
    );
  });

  it('should pass color', () => {
    // mock
    const color = ButtonColor.secondary;

    // before
    const { container } = render(
      <ButtonGroup color={color}>{children}</ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(getByE2EAttribute(container, E2EAttribute.button, i)).toHaveClass(
        classNamesButton[classNameButton].modificators[color],
      );
    }
  });

  it('should pass disabled', () => {
    // before
    const { container } = render(
      <ButtonGroup disabled>{children}</ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(
        getByE2EAttribute(container, E2EAttribute.button, i),
      ).toBeDisabled();
    }
  });

  it('should pass disableRippleEffect', async () => {
    // before
    const { container } = render(
      <ButtonGroup disabledRippleEffect>{children}</ButtonGroup>,
    );

    for (let i = 0; i < contents.length; i++) {
      // find
      const button = getByE2EAttribute(container, E2EAttribute.button, i);

      // action
      fireEvent.click(button);

      // result
      await waitFor(
        () => {
          expect(button.lastChild).toHaveTextContent(contents[i]);
        },
        { timeout: 100 },
      );
    }
  });

  it('should pass e2eAttribute', () => {
    // before
    const { container } = render(
      <ButtonGroup e2eAttribute={E2EAttribute.buttonGroup}>
        {children}
      </ButtonGroup>,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonGroup),
    ).toHaveAttribute(getDataTestAttribute(E2EAttribute.buttonGroup));
  });

  it('should pass e2eValue', () => {
    // before
    const { container } = render(
      <ButtonGroup e2eValue="e2eValue">{children}</ButtonGroup>,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonGroup),
    ).toHaveAttribute(
      getDataTestAttribute(E2EAttribute.buttonGroup),
      'e2eValue',
    );
  });

  it('should pass forcedHover', () => {
    // before
    const { container } = render(
      <ButtonGroup forcedHover>{children}</ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(getByE2EAttribute(container, E2EAttribute.button, i)).toHaveClass(
        classNamesButton[classNameButton].modificators.forcedHover,
      );
    }
  });

  it('should pass orientation', () => {
    // mock
    const orientations = enumToArray(
      ButtonGroupOrientation,
    ) as Array<ButtonGroupOrientation>;

    // before
    const { container } = render(
      <>
        {orientations.map((orientation) => (
          <ButtonGroup
            e2eValue={orientation}
            key={orientation}
            orientation={orientation}
          >
            {children}
          </ButtonGroup>
        ))}
      </>,
    );

    orientations.forEach((orientation) => {
      // find
      const buttonGroup = getByE2EAttribute(
        container,
        E2EAttribute.buttonGroup,
        orientation,
      );

      for (let i = 0; i < contents.length; i++) {
        // find
        const button = getByE2EAttribute(buttonGroup, E2EAttribute.button, i);

        // result
        expect(button).toHaveClass(
          classNamesButtonGroup.button.modificators[orientation],
        );
      }
    });
  });

  it('should pass size', () => {
    // mock
    const size = ButtonSize.large;

    // before
    const { container } = render(
      <ButtonGroup forcedHover size={size}>
        {children}
      </ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(getByE2EAttribute(container, E2EAttribute.button, i)).toHaveClass(
        classNamesButton[classNameButton].modificators[size],
      );
    }
  });

  it('should pass style', () => {
    // before
    const { container } = render(
      <ButtonGroup style={{ width: '100%' }}>{children}</ButtonGroup>,
    );

    // result
    expect(
      getByE2EAttribute(container, E2EAttribute.buttonGroup),
    ).toHaveAttribute('style', 'width: 100%;');
  });

  it('should pass type', () => {
    // before
    const { container } = render(
      <ButtonGroup type="submit">{children}</ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(
        getByE2EAttribute(container, E2EAttribute.button, i),
      ).toHaveAttribute('type', 'submit');
    }
  });

  it('should pass variant', () => {
    // mock
    const variant = ButtonVariant.outlined;

    // before
    const { container } = render(
      <ButtonGroup variant={variant}>{children}</ButtonGroup>,
    );

    // result
    for (let i = 0; i < contents.length; i++) {
      expect(getByE2EAttribute(container, E2EAttribute.button, i)).toHaveClass(
        classNamesButton[classNameButton].modificators[variant],
      );
    }
  });
});
