import { kebabCase } from 'lodash';

// others
import { classNames } from '../../classNames';

// types
import { IconShape, IconModificatorsKeys } from '../../enums';

// utils
import { composeClassNames } from '../composeClassNames';

describe('composeClassNames', () => {
  it('should return composed class names', () => {
    // mock
    const iconShape = IconShape.upOutlined;
    const iconName = classNames[iconShape];

    // before
    const result = composeClassNames(iconShape);

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
