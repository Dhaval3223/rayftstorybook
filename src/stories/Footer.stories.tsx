import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer, Props } from '../components/Footer';

export default {
  title: 'Footer/Footer',
  component: Footer,
  
} as Meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

