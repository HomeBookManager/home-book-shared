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
import { ButtonSize } from '../../Button/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

// utils
import { enumToArray } from '../../../../../utils';

const description = [
  'The <code>size</code> prop can be used to control the appearance of the button group.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  imports: [
    {
      items: '{ Button, ButtonGroup, ButtonSize }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      attributes: [{ name: 'size', value: 'ButtonSize.small' }],
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
      attributes: [{ name: 'size', value: 'ButtonSize.large' }],
      children: Array.from(Array(3), (_, i) => ({
        componentName: 'Button',
        props: [{ children: NumbersTemplate[i] }],
      })),
    },
  ],
};

const title = 'Components/General/Button Group/Examples/Button Group Sizes';

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
    title="Button Group Sizes"
  >
    {enumToArray<ButtonSize>(ButtonSize).map((size, key) => (
      <ButtonGroup {...args} size={size} key={key}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    ))}
  </StoryComponent>
);

export const ButtonGroupSizes = Template.bind({});

ButtonGroupSizes.argTypes = {
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
};

ButtonGroupSizes.args = {};
