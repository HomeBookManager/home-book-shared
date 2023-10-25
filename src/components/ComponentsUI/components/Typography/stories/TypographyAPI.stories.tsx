import type { Meta, StoryFn } from '@storybook/react';

// components
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';
import Typography from '../Typography';

// types
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Typography component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    description: 'The content of the component.',
    name: 'children',
    type: 'ReactElement | Array<ReactElement>',
  },
  {
    description: 'Override or extend the styles applied to the component.',
    name: 'className',
    type: 'string',
  },
  {
    description:
      'The standard color which ignore mode. If provided the color mode will be disabled. The standard color which ignore mode. If provided the <code>colorMode</code> will be disabled.',
    name: 'color',
    type: 'TTypographyColor',
  },
  {
    defaultValue: `{ "dark": "#ffffff", "light": "#1e2839" }`,
    description: 'The color mode dependly on theme.',
    name: 'colorMode',
    type: 'TTypographyColorMode',
  },
  {
    description: 'Provide test-id.',
    name: 'e2eAttribute',
    type: 'E2EAttribute',
  },
  {
    description: 'Provide value for test-id.',
    name: 'e2eValue',
    type: 'number | string',
  },
  {
    defaultValue: 'normal',
    description: 'The font style to use.',
    name: 'fontStyle',
    type: `normal'<br/>|&nbsp;'italic'<br/>|&nbsp;'normal'<br/>|&nbsp;'string'`,
  },
  {
    defaultValue: 'P',
    description: 'The variant to use.',
    name: 'fontType',
    type: `P'<br/>|&nbsp;'h1'<br/>|&nbsp;'h2'<br/>|&nbsp;'h3'<br/>|&nbsp;'h4'<br/>|&nbsp;'h5'<br/>|&nbsp;'h6'<br/>|&nbsp;'P'<br/>|&nbsp;'Small'<br/>|&nbsp;'string'`,
  },
  {
    defaultValue: 'regular',
    description: 'The font weight to use.',
    name: 'fontWeight',
    type: `regular'<br/>|&nbsp;'black'<br/>|&nbsp;'black'<br/>|&nbsp;'extraBold'<br/>|&nbsp;'light'<br/>|&nbsp;'medium'<br/>|&nbsp;'regular'<br/>|&nbsp;'semiBold'<br/>|&nbsp;'string'`,
  },
  {
    description:
      'Can be passed to sets the HTML or XML markup contained within the element.',
    name: 'innerHtml',
    type: 'string',
  },
  {
    defaultValue: 'false',
    description:
      'If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.',
    name: 'noWrap',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: 'If true then text will be without margin.',
    name: 'withoutMargin',
    type: `boolean`,
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: 'Typography',
      path: './shared/ComponentsUI/components/Typography/Typography',
    },
  ],
};

const title = 'Components/Data Display/Typography/Typography API';

export default {
  component: Typography,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=424-247&mode=design&t=nc8frNgeO6zoJtb6-0',
    },
    options: { showPanel: false },
  },
  title,
} satisfies Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Typography API"
  />
);

export const TypographyAPI = Template;
