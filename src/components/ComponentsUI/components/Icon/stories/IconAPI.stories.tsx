import type { Meta, StoryFn } from '@storybook/react';

// components
import Icon from '../Icon';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Icon component. Learn about the available props. Icon is based on basic <code>props</code> from <code>HTMLAttributes<SVGSVGElement></code>',
];

const tableBodyData: Array<TTableBody> = [
  {
    description: 'Override or extend the styles applied to the component.',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Override or extend the styles applied to the path element.',
    name: 'classNamePath',
    type: 'string',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is clickable',
    name: 'clickable',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
    name: 'disabled',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is not focusable.',
    name: 'disabledFocus',
    type: 'boolean',
  },
  {
    description:
      'If <code>true</code>, the component does not trigger effect hover.',
    name: 'disabledHover',
    type: 'boolean',
  },
  {
    defaultValue: 'E2EAttribute.icon',
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
    description: 'Provide the color for fill in light mode',
    name: 'fill',
    type: 'string',
  },
  {
    description: 'Provide the color for fill in dark mode',
    name: 'fillDark',
    type: 'string',
  },
  {
    defaultValue: 'false',
    description:
      'If <code>true</code>, the component trigger hover without user affect.',
    name: 'forcedHover',
    type: 'boolean',
  },
  {
    description: 'Provide the height for component',
    name: 'height',
    type: 'string',
  },
  {
    description: 'Icon which represent the shape.',
    name: 'iconComponent',
    type: 'React.FC<TIconBasicProps>',
  },
  {
    defaultValue: 'false',
    description:
      'If <code>true</code>, the default styles will not be applied.',
    name: 'ignoreDefaultStyles',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the component will be selected.',
    name: 'ignoreDefaultStyles',
    type: 'boolean',
  },
  {
    description: 'The <code>ref</code> is forwarded to the root element.',
    name: 'ref',
    type: 'Ref<SVGSVGElement>',
  },
  {
    description: 'Provide the color for stroke in light mode',
    name: 'stroke',
    type: 'string',
  },
  {
    description: 'Provide the color for stroke in dark mode',
    name: 'strokeDark',
    type: 'string',
  },
  {
    description: 'Provide the with for component',
    name: 'width',
    type: 'string',
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ Icon }',
      path: LIB_IMPORT_PATH,
    },
  ],
};

const title = 'Components/General/Icon/Icon API';

export default {
  component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=504-2&mode=design&t=JrklSQ2xrS6SOqUP-0',
    },
    options: { showPanel: false },
  },
  title,
} satisfies Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Icon API"
  />
);

export const IconAPI = Template;
