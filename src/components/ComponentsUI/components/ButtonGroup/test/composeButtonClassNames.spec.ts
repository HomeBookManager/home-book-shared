import cx from 'classnames';

// others
import { classNames } from '../classNames';

// types
import { ButtonColor, ButtonVariant } from '../../Button/enums';
import { ButtonGroupOrientation } from '../enums';

// utils
import { composeButtonClassNames } from '../utils';

describe('composeButtonClassNames', () => {
  it('should return composed class names', () => {
    // mock
    const classNameButton = 'classNameButton';
    const color = ButtonColor.secondary;
    const forcedHover = true;
    const orientation = ButtonGroupOrientation.vertical;
    const variant = ButtonVariant.text;

    // before
    const result = composeButtonClassNames(
      classNameButton,
      color,
      forcedHover,
      orientation,
      variant,
    );

    // result
    expect(result).toBe(
      cx(
        classNameButton,
        classNames.button.name,
        classNames.button.modificators[color],
        {
          [classNames.button.modificators.forcedHover]: forcedHover,
        },
        classNames.button.modificators[orientation],
        classNames.button.modificators[variant],
      ),
    );
  });
});
