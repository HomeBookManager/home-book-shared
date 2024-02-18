import { Meta, StoryFn } from '@storybook/react';

// components
import ButtonGroup from '../ButtonGroup';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Button Group component. Learn about the available props. Button Group is based on basic <code>props</code> from <code>HTMLAttributes<HTMLDivElement></code>.',
];

const link =
  'http://localhost:6006/?path=/story/components-general-button-button-api--button-api';

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
      'Override or extend the styles applied to the <code>Button</code>.',
    name: 'classNameButton',
    type: 'string',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'color',
    type: '-',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'disabled',
    type: '-',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'disabledRippleEffect',
    type: '-',
  },
  {
    description: 'Provide test-id',
    name: 'e2eAttribute',
    type: 'E2EAttribute',
  },
  {
    description: 'Provide value for test-id',
    name: 'e2eValue',
    type: 'number | string',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'forcedHover',
    type: '-',
  },
  {
    defaultValue: `'horizontal'`,
    description: 'The component orientation (layout flow direction).',
    name: 'orientation',
    type: `'horizontal'<br/>|&nbsp;'vertical'<br/>|&nbsp;'string'`,
  },
  {
    description: 'The <code>ref</code> is forwarded to the root element.',
    name: 'ref',
    type: 'Ref<HTMLButtonElement>',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'size',
    type: '-',
  },
  {
    description: 'Override styles by object of styles.',
    name: 'style',
    type: 'object',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'type',
    type: '-',
  },
  {
    description: `This attribute is passed to all <code>Button</code> components that are present. Read more <a href="${link}">here</a>`,
    name: 'variant',
    type: '-',
  },
];

const title = 'Components/General/Button Group/Button Group API';

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ ButtonGroup }',
      path: LIB_IMPORT_PATH,
    },
  ],
};

export default {
  component: ButtonGroup,
  title,
} satisfies Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button Group API"
  />
);

export const ButtonGroupAPI = Template.bind({});
