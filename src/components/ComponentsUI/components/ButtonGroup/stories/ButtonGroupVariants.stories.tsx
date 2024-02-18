import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';
import { NumbersTemplate } from '../../../../../stories/components/StoryBlockCode/constants';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { ButtonVariant } from '../../Button/enums';

// utils
import { enumToArray } from '../../../../../utils';

const description = ['All the standard button variants are supported.'];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  imports: [
    {
      items: '{ Button, ButtonGroup, ButtonVariant }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [{ name: 'variant', value: 'ButtonVariant.text' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [{ name: 'variant', value: 'ButtonVariant.outlined' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
  ],
};

const title = 'Components/General/Button Group/Examples/Button Group Variants';

export default {
  component: ButtonGroup,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=609-902&mode=design&t=OOr0lDXF7kQbtwBl-0',
    },
  },
  title,
} satisfies Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Button Group Variants"
  >
    {(enumToArray(ButtonVariant) as Array<ButtonVariant>).map(
      (variant, key) => (
        <ButtonGroup {...args} key={key} variant={variant}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      ),
    )}
  </StoryComponent>
);

export const ButtonGroupVariants = Template.bind({});

ButtonGroupVariants.argTypes = {
  children: {
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

ButtonGroupVariants.args = {};
