import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconsPanel, Props } from '../components/IconsPanel';

export default {
  title: 'Header/IconsPanel',
  component: IconsPanel,
} as Meta;

const Template: Story<Props> = (args) => <IconsPanel {...args} />;

export const Web = Template.bind({});
