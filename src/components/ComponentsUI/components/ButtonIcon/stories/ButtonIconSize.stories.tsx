import { Meta, StoryFn } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import IconUpOutlined from '../../Icon/components/IconUpOutlined';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { ButtonSize } from '../../Button/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils';

const description = [
  'For larger or smaller icon buttons, use the <code>size</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  imports: [
    {
      items: '{ ButtonIcon, ButtonSize, IconUpOutlined }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [
        { name: 'iconComponent', value: 'IconUpOutlined' },
        { name: 'size', value: 'ButtonSize.small' },
      ],
    },
    {
      attributes: [{ name: 'iconComponent', value: 'IconUpOutlined' }],
    },
    {
      attributes: [
        { name: 'iconComponent', value: 'IconUpOutlined' },
        { name: 'size', value: 'ButtonSize.large' },
      ],
    },
  ],
};

const title = 'Components/General/Button Icon/Examples/Button Icon Sizes';

export default {
  component: ButtonIcon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=708-2&mode=design&t=qDKyrWs4M7cjSc7r-0',
    },
  },
  title,
} satisfies Meta<typeof ButtonIcon>;

const Template: StoryFn<typeof ButtonIcon> = (args) => {
  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Button Icon Size"
    >
      {enumToArray<ButtonSize>(ButtonSize).map((size) => (
        <ButtonIcon
          {...args}
          iconComponent={IconUpOutlined}
          key={size}
          size={size}
        />
      ))}
    </StoryComponent>
  );
};

export const ButtonIconSize = Template.bind({});

ButtonIconSize.argTypes = {
  iconComponent: {
    table: {
      disable: true,
    },
  },
  size: {
    table: {
      disable: true,
    },
  },
};

ButtonIconSize.args = {};
