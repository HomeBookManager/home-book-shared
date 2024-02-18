import { capitalize } from 'lodash';
import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../Button';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from '../enums';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils/transform/enumToArray';

const description = [
  'For larger or smaller buttons, use the <code>size</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Button',
  imports: [
    {
      items: '{ Button, ButtonVariant }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [
        { name: 'size', value: 'ButtonSize.small' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: capitalize(ButtonSize.small),
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.text' }],
      children: capitalize(ButtonSize.medium),
    },
    {
      attributes: [
        { name: 'size', value: 'ButtonSize.large' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: capitalize(ButtonSize.large),
    },
    {
      attributes: [{ name: 'size', value: 'ButtonSize.small' }],
      children: capitalize(ButtonSize.small),
    },
    {
      children: capitalize(ButtonSize.medium),
    },
    {
      attributes: [{ name: 'size', value: 'ButtonSize.large' }],
      children: capitalize(ButtonSize.large),
    },
    {
      attributes: [
        { name: 'size', value: 'ButtonSize.small' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: capitalize(ButtonSize.small),
    },
    {
      attributes: [{ name: 'variant', value: 'Variant.outlined' }],
      children: capitalize(ButtonSize.medium),
    },
    {
      attributes: [
        { name: 'size', value: 'ButtonSize.large' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: capitalize(ButtonSize.large),
    },
  ],
};

const title = 'Components/General/Button/Examples/Button Sizes';

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
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.maxThreeColumns}
    description={description}
    title="Button Size"
  >
    {(enumToArray(ButtonVariant) as Array<ButtonVariant>).map((variant) =>
      (enumToArray(ButtonSize) as Array<ButtonSize>).map((size) => (
        <Button
          {...args}
          key={`${variant}-${size}`}
          size={size}
          variant={variant}
        >
          {capitalize(size)}
        </Button>
      )),
    )}
  </StoryComponent>
);

export const ButtonSizes = Template.bind({});

ButtonSizes.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  size: {
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

ButtonSizes.args = {
  color: ButtonColor.primary,
};
