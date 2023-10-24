import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// components
import StoryComponent from '../../../../../stories/components/StoryComponent/StoryComponent';
import Typography from '../Typography';
import { H1, H2, H3, H4, H5, H6, P, Small } from '../';

// others
import { basicTypography } from '../../../../../stories/constants';

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
      items: '{ H1, H2, H3, H4, H5, H6, P, Small }',
      path: './shared/ComponentsUI/components/Typography',
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

export default {
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hVsmArh0s8VYibYYBtChnY/Components---UI?node-id=718%3A21',
    },
  },
  title: basicTypography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ ...args }) => (
  <StoryComponent
    blockCodeData={blockCodeData}
    contentGridFlow={ContentGridFlow.row}
    description={description}
    title="Basic Typography"
  >
    <H1 {...args}>h1. Heading</H1>

    <H2 {...args}>h2. Heading</H2>

    <H3 {...args}>h3. Heading</H3>

    <H4 {...args}>h4. Heading</H4>

    <H5 {...args}>h5. Heading</H5>

    <H6 {...args}>h6. Heading</H6>

    <P {...args}>P. Standard Text</P>

    <Small {...args}>Small. Small Text</Small>
  </StoryComponent>
);

export const BasicTypography = Template.bind({});

BasicTypography.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
};

BasicTypography.args = {};
