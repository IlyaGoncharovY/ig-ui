import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import {Button, ButtonProps} from './Button';

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Click me',
    disabled: false,
    size: 'medium',
  },
  parameters: {
    controls: {
      exclude: [],
    },
  },
} as Meta<ButtonStoryProps>;

type ButtonStoryProps = ButtonProps;

/**
 * Шаблон для Storybook.
 */
const Template: StoryFn<ButtonStoryProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
};
