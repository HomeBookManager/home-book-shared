import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import { IconUpOutlined } from '../../Icon/components';

// types
import { ButtonColor, ButtonVariant } from '../enums';
import { IconShape } from '../../Icon/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
    {
      items: 'Send',
      path: './assets/icons/send.svg',
    },
    {
      items: 'Trash',
      path: './assets/icons/trash.svg',
    },
  ],
  props: [
    {
      attributes: [
        {
          name: 'startIcon',
          value:
            '{ applyFill: true, iconComponent: IconUpOutlined, iconShape: IconShape.upOutlined }',
        },
      ],
      children: 'Send',
    },
    {
      attributes: [
        {
          name: 'endIcon',
          value:
            '{ applyFill: true, iconComponent: IconUpOutlined, iconShape: IconShape.upOutlined }',
        },
      ],
      children: 'Remove',
    },
  ],
};

const title = 'Components/General/Button/Examples/Button With Icon';

export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=544-161&mode=design&t=g1VHDi2srZ6cK35T-0',
    },
  },
  title,
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  const icon = {
    applyFill: true,
    iconComponent: IconUpOutlined,
    iconShape: IconShape.upOutlined,
  };

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      description={description}
      title="Button With Icon"
    >
      <Button {...args} startIcon={icon} variant={ButtonVariant.contained}>
        Button
      </Button>
      <Button
        {...args}
        endIcon={icon}
        startIcon={icon}
        variant={ButtonVariant.contained}
      >
        Button
      </Button>
      <Button {...args} endIcon={icon} variant={ButtonVariant.outlined}>
        Button
      </Button>
    </StoryComponent>
  );
};

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  endIcon: {
    table: {
      disable: true,
    },
  },
  startIcon: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
};

ButtonWithIcon.args = {
  color: ButtonColor.primary,
};