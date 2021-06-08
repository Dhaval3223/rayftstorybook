import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BurgerMenu, Props } from '../components/BurgurMenu';

export default {
  title: 'Header/BurgerMenu',
  component: BurgerMenu,
} as Meta;

const Template: Story<Props> = (args) => <BurgerMenu {...args} />;

export const Primary = Template.bind({});
