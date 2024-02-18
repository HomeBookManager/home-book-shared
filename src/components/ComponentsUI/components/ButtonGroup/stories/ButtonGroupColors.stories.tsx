import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';
import { NumbersTemplate } from '../../../../../stories/components/StoryBlockCode/constants';

// types
import { ButtonColor } from '../../Button/enums';
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils';

const description = [
  'The <code>color</code> prop can be used to control the appearance of the button group.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  imports: [
    {
      items: '{ Button, ButtonColor, ButtonGroup }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.secondary' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.success' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.warning' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
    {
      attributes: [{ name: 'color', value: 'ButtonColor.error' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
  ],
};

const title = 'Components/General/Button Group/Examples/Button Group Colors';

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
    title="Button Group Colors"
  >
    {(enumToArray(ButtonColor) as Array<ButtonColor>).map((color, key) => (
      <ButtonGroup {...args} color={color} key={key}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupColors = Template.bind({});

ButtonGroupColors.argTypes = {
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

ButtonGroupColors.args = {};
