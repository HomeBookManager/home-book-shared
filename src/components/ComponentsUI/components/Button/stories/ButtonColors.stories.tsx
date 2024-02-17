import { capitalize } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// types
import { ButtonColor, ButtonVariant } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils/transform/enumToArray';

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  imports: [
    {
      items: 'Button',
      path: './shared/ComponentsUI/components/Button/Button',
    },
    {
      items: '{ ButtonColor }',
      path: './shared/ComponentsUI/components/Button/enums',
    },
  ],
  props: [
    {
      children: 'Text',
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.secondary' }],
      children: 'Secondary',
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.success' }],
      children: 'Success',
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.warning' }],
      children: 'Warning',
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.error' }],
      children: 'Error',
    },
  ],
};

const title = 'Components/General/Button/Examples/Button Colors';

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

const Template: StoryFn<typeof Button> = (args) => (
  <StoryComponent blockCodeData={blockCodeData} title="Button Colors">
    {(enumToArray(ButtonColor) as Array<ButtonColor>).map((color) => (
      <Button {...args} color={color} key={color}>
        {capitalize(color)}
      </Button>
    ))}
  </StoryComponent>
);

export const ButtonColors = Template.bind({});

ButtonColors.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  color: {
    table: {
      disable: true,
    },
  },
};

ButtonColors.args = {
  variant: ButtonVariant.text,
};
