import { Meta, StoryFn } from '@storybook/react';

// components
import ButtonIcon from '../ButtonIcon';
import StoryApi from '../../../../../stories/components/StoryApi/StoryApi';

// others
import { LIB_IMPORT_PATH } from '../../../../../stories/constants';

// types
import { TStoryBlockCode } from '../../../../../stories/components/StoryBlockCode/types';
import { TTableBody } from '../../../../../stories/components/StoryPropsTable/types';

const description = [
  'API documentation for the React Button Icon component. Learn about the available props.',
];

const tableBodyData: Array<TTableBody> = [
  {
    description: 'Override or extend the styles applied to the component.',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Override or extend the styles applied to the circle pulse.',
    name: 'classNameCirclePulse',
    type: 'string',
  },
  {
    description: 'Override or extend the styles applied to the Icon component.',
    name: 'classNameIcon',
    type: 'string',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the component is disabled.',
    name: 'disabled',
    type: 'boolean',
  },
  {
    defaultValue: 'false',
    description: 'If <code>true</code>, the pulse effect is disabled.',
    name: 'disablePulseEffect',
    type: 'boolean',
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
    defaultValue: 'false',
    description:
      'If <code>true</code>, the hover will be active without user friction.',
    name: 'forcedHover',
    type: 'boolean',
  },
  {
    description: 'Icon which represent the shape.',
    name: 'iconComponent',
    type: 'React.FC<TIconBasicProps>',
  },
  {
    description: '<code>Function</code> to call action after the click button.',
    name: 'onClick',
    type: `ButtonHTMLAttributes<HTMLElement>['onClick']`,
  },
  {
    defaultValue: `'medium'`,
    description:
      'The size of the component. <code>small</code> is equivalent to the dense button styling.',
    name: 'size',
    type: `'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'`,
  },
];

const blockCodeData: TStoryBlockCode = {
  imports: [
    {
      items: '{ ButtonIcon }',
      path: LIB_IMPORT_PATH,
    },
  ],
};

const title = 'Components/General/Button Icon/Button Icon API';

export default {
  component: ButtonIcon,
  title,
} satisfies Meta<typeof ButtonIcon>;

const Template: StoryFn<typeof ButtonIcon> = () => (
  <StoryApi
    blockCodeData={blockCodeData}
    description={description}
    tableBodyData={tableBodyData}
    title="Button Icon API"
  />
);

export const ButtonIconAPI = Template.bind({});
