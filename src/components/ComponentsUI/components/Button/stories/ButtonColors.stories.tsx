import { capitalize } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { ButtonColor, ButtonVariant } from '../enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils/transform/enumToArray';

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  imports: [
    {
      items: '{ Button, ButtonColor }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      children: capitalize(ButtonColor.primary),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.secondary' }],
      children: capitalize(ButtonColor.secondary),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.success' }],
      children: capitalize(ButtonColor.success),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.warning' }],
      children: capitalize(ButtonColor.warning),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.error' }],
      children: capitalize(ButtonColor.error),
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
    {enumToArray<ButtonColor>(ButtonColor).map((color) => (
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
