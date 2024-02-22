import { keys, map } from 'lodash';
import type { Meta, StoryFn } from '@storybook/react';

// components
import Icon from '../Icon';
import Icons from '../components';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { E2EAttribute } from '../../../../E2EDataAttributes/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use Icon to present to emphasize the importance of a given action or section.',
];

const iconsKeys = keys(Icons);

const blockCodeData: TStoryBlockCode = {
  componentName: '',
  imports: [
    {
      items: '{ Icon, Icons }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      children: iconsKeys.map((componentName) => {
        return {
          componentName: 'Icon',
          props: [
            {
              attributes: [
                {
                  name: 'iconComponent',
                  value: `Icons.${componentName}`,
                },
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
  const icons = map(Icons, (iconComponent) => iconComponent);

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      contentGridFlow={ContentGridFlow.maxSixColumns}
      description={description}
      title="Icon"
    >
      {icons.map((iconComponent) => (
        <Icon
          {...args}
          iconComponent={iconComponent}
          key={iconComponent.name}
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
