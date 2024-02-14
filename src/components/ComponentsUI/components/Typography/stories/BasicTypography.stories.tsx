import type { Meta, StoryFn } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Typography from '../Typography';

// others
import { TYPOGRAPHY_COLORS_MODE } from '../constants';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const description = [
  'Use typography to present your design and content as clearly and efficiently as possible.',
];

const blockCodeData: TStoryBlockCode = {
  componentName: 'Typography',
  imports: [
    {
      items: 'Typography',
      path: './shared/ComponentsUI/components/Typography/Typography',
    },
    {
      items: '{ TYPOGRAPHY_COLORS_MODE }',
      path: './shared/ComponentsUI/components/Typography/constants',
    },
  ],
  props: [
    {
      children: 'text',
    },
  ],
};

const title = 'Components/Data Display/Typography/Basic Typography';

export default {
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=424-247&mode=design&t=nc8frNgeO6zoJtb6-0',
    },
  },
  title,
} satisfies Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = ({ ...args }) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Typography"
  >
    <Typography {...args} />
  </StoryComponent>
);

export const BasicTypography = Template;

BasicTypography.argTypes = {};

BasicTypography.args = {
  children: 'text',
  color: TYPOGRAPHY_COLORS_MODE.neutral1,
};
