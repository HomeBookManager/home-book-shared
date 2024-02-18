import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';
import { NumbersTemplate } from '../../../../../stories/components/StoryBlockCode/constants';

// types
import { ButtonGroupOrientation } from '../enums';
import { ButtonVariant } from '../../Button/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils';

const description = [
  'The button group can be displayed vertically using the <code>orientation</code> prop.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  imports: [
    {
      items: '{ Button, ButtonGroup, ButtonGroupOrientation }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [
        { name: 'orientation', value: 'ButtonGroupOrientation.vertical' },
        { name: 'variant', value: 'Variant.text' },
      ],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [
        { name: 'orientation', value: 'ButtonGroupOrientation.vertical' },
      ],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [
        { name: 'orientation', value: 'ButtonGroupOrientation.vertical' },
        { name: 'variant', value: 'Variant.outlined' },
      ],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
  ],
};

const title = 'Components/General/Button Group/Examples/Button Group Vertical';

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
    description={description}
    title="Button Group Vertical"
  >
    {(enumToArray(ButtonVariant) as Array<ButtonVariant>).map(
      (variant, key) => (
        <ButtonGroup
          {...args}
          key={key}
          orientation={ButtonGroupOrientation.vertical}
          variant={variant}
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      ),
    )}
  </StoryComponent>
);

export const ButtonGroupVertical = Template.bind({});

ButtonGroupVertical.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  orientation: {
    table: {
      disable: true,
    },
  },
};

ButtonGroupVertical.args = {};
