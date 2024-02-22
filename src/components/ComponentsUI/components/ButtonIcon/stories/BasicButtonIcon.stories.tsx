import { Meta, StoryFn } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import IconUpOutlined from '../../Icon/components/IconUpOutlined';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Icon buttons are commonly found in app bars and toolbars.',
  'Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonIcon',
  imports: [
    {
      items: '{ ButtonIcon, IconUpOutlined }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [{ name: 'iconComponent', value: 'IconUpOutlined' }],
    },
  ],
};

const title = 'Components/General/Button Icon/Basic Button Icon';

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
      title="Basic Button Icon"
    >
      <ButtonIcon {...args} iconComponent={IconUpOutlined} />
    </StoryComponent>
  );
};

export const BasicButtonIcon = Template.bind({});

BasicButtonIcon.argTypes = {
  iconComponent: {
    table: {
      disable: true,
    },
  },
};

BasicButtonIcon.args = {};
