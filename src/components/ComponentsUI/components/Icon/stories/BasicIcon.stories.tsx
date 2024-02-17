import { camelCase, keys, map } from 'lodash';
import type { Meta, StoryFn } from '@storybook/react';

// components
import Icon from '../Icon';
import * as iconsComponents from '../components';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { E2EAttribute } from '../../../../E2EDataAttributes/enums';
import { IconShape } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use Icon to present to emphasize the importance of a given action or section.',
];

const iconKeys = keys(iconsComponents);

const getEnumKey = (key: string): string => camelCase(key.replace('Icon', ''));

const blockCodeData: TStoryBlockCode = {
  componentName: '',
  imports: [
    {
      items: 'Icon',
      path: './shared/ComponentsUI/components/Icon/Icon',
    },
    {
      items: '* as iconsComponents',
      path: './shared/ComponentsUI/components/Icon/components',
    },
    {
      items: '{ IconShape }',
      path: './shared/ComponentsUI/components/Icon/enums',
    },
  ],
  props: [
    {
      children: iconKeys.map((componentName) => {
        const enumKey = getEnumKey(componentName);

        return {
          componentName: 'Icon',
          props: [
            {
              attributes: [
                {
                  name: 'iconComponent',
                  value: `iconsComponents.${componentName}`,
                },
                { name: 'iconShape', value: `IconShape.${IconShape[enumKey]}` },
              ],
            },
          ],
        };
      }),
    },
  ],
};

const title = 'Components/General/Icon/Basic Icon';

export default {
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=504-2&mode=design&t=JrklSQ2xrS6SOqUP-0',
    },
  },
  title,
} satisfies Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = ({ ...args }) => {
  const icons = map(iconsComponents, (iconComponent, key) => {
    const enumKey = getEnumKey(key);

    return {
      iconComponent,
      iconShape: IconShape[enumKey],
    };
  });

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      contentGridFlow={ContentGridFlow.maxSixColumns}
      description={description}
      title="Icon"
    >
      {icons.map(({ iconComponent, iconShape }) => (
        <Icon
          {...args}
          iconComponent={iconComponent}
          iconShape={iconShape}
          key={iconShape}
        />
      ))}
    </StoryComponent>
  );
};

export const BasicIcon = Template;

BasicIcon.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  iconComponent: {
    table: {
      disable: true,
    },
  },
  iconShape: {
    table: {
      disable: true,
    },
  },
};

BasicIcon.args = {
  className: '',
  classNamePath: '',
  clickable: false,
  disabled: false,
  disabledFocus: false,
  disabledHover: false,
  e2eAttribute: E2EAttribute.icon,
  e2eValue: '',
  fill: '',
  fillDark: '',
  forcedHover: false,
  height: '16px',
  ignoreDefaultStyles: false,
  selected: false,
  stroke: '',
  strokeDark: '',
  width: '16px',
};