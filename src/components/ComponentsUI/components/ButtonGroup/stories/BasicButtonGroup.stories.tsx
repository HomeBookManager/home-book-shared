import { Meta, StoryFn } from '@storybook/react';

// components
import Button from '../../Button/Button';
import ButtonGroup from '../ButtonGroup';
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'The ButtonGroup component can be used to group related buttons.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'ButtonGroup',
  imports: [
    {
      items: '{ Button, ButtonGroup }',
      path: LIB_IMPORT_PATH,
    },
  ],
  props: [
    {
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
    {
      attributes: [{ name: 'forcedHover' }],
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
    {
      attributes: [{ name: 'disabled' }],
      children: Array.from(Array(3), () => ({ componentName: 'Button' })),
    },
  ],
};

const title = 'Components/General/Button Group/Basic Button Group';

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
    title="Basic Button Group"
  >
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <ButtonGroup {...args} forcedHover>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <ButtonGroup {...args} disabled>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </StoryComponent>
);

export const BasicButtonGroup = Template.bind({});

BasicButtonGroup.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  forcedHover: {
    table: {
      disable: true,
    },
  },
};

BasicButtonGroup.args = {};
