import type { Meta, StoryFn } from '@storybook/react';
import { omit } from 'lodash';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Typography from '../Typography';
import { H1, H2, H3, H4, H5, H6, P, Small } from '../';

// others
import { TYPOGRAPHY_COLORS_MODE } from '../constants';

// types
import { ContentGridFlow } from '../../../../../stories/components/StoryComponent/enums';
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';

const blockCodeData: TStoryBlockCode = {
  componentName: 'Typography',
  imports: [
    {
      items: '{ H1, H2, H3, H4, H5, H6, P, Small }',
      path: './shared/ComponentsUI/components/Typography',
    },
    {
      items: '{ TYPOGRAPHY_COLORS_MODE }',
      path: './shared/ComponentsUI/constants',
    },
  ],
  props: [
    {
      children: 'h1. Heading',
    },
    {
      children: 'h. Heading',
    },
    {
      children: 'h3. Heading',
    },
    {
      children: 'h4. Heading',
    },
    {
      children: 'h5. Heading',
    },
    {
      children: 'h6. Heading',
    },
    {
      children: 'Text',
    },
    {
      children: 'Small Text',
    },
  ],
};

const title = 'Components/Data Display/Typography/Examples/Typography Variants';

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

const Template: StoryFn<typeof Typography> = ({ ...args }) => {
  const omittedArgs = omit(args, 'children');

  return (
    <StoryComponent
      blockCodeData={blockCodeData}
      contentGridFlow={ContentGridFlow.row}
      title="Typography Variants"
    >
      <H1 {...omittedArgs}>h1. Heading</H1>

      <H2 {...omittedArgs}>h2. Heading</H2>

      <H3 {...omittedArgs}>h3. Heading</H3>

      <H4 {...omittedArgs}>h4. Heading</H4>

      <H5 {...omittedArgs}>h5. Heading</H5>

      <H6 {...omittedArgs}>h6. Heading</H6>

      <P {...omittedArgs}>P. Standard Text</P>

      <Small {...omittedArgs}>Small. Small Text</Small>
    </StoryComponent>
  );
};

export const TypographyVariants = Template;

TypographyVariants.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};

TypographyVariants.args = {
  color: TYPOGRAPHY_COLORS_MODE.neutral1,
};
