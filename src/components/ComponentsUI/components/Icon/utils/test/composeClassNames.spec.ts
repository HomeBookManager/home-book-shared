import { kebabCase } from 'lodash';

// types
import { IconShape, IconModificatorsKeys } from '../../enums';

// utils
import { composeClassNames } from '../composeClassNames';

describe('composeClassNames', () => {
  it('should return composed class names', () => {
    // mock
    const iconShape = IconShape.iconUpOutlined;
    const iconName = iconShape.charAt(0).toUpperCase() + iconShape.slice(1);

    // before
    const result = composeClassNames(iconName);

    // result
    expect(result).toStrictEqual({
      [iconName]: {
        modificators: {
          clickable: `${iconName}--${IconModificatorsKeys.clickable}`,
          disabled: `${iconName}--${IconModificatorsKeys.disabled}`,
          disabledHover: `${iconName}--${kebabCase(
            IconModificatorsKeys.disabledHover,
          )}`,
          forcedHover: `${iconName}--${kebabCase(
            IconModificatorsKeys.forcedHover,
          )}`,
          selected: `${iconName}--${IconModificatorsKeys.selected}`,
        },
        name: iconName,
      },
    });
  });
});
