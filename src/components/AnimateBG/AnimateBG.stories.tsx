import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { AnimateBG, AnimateBGProps } from './AnimateBG';

export default {
  title: 'components/AnimateBG',
  component: AnimateBG,
  args: {
    inputLength: 4,
    backgroundColor: '#4a4a4a',
    inputType: 'text',
  },
} as Meta<AnimateBGProps>;

export const Default: StoryFn<AnimateBGProps> = (args) => <AnimateBG {...args} />;
Default.storyName = 'Default Input';

export const PasswordInput: StoryFn<AnimateBGProps> = (args) => (
  <AnimateBG {...args} inputType="password" />
);
PasswordInput.storyName = 'Password Input';

export const EmailInput: StoryFn<AnimateBGProps> = (args) => (
  <AnimateBG {...args} inputType="email" />
);
EmailInput.storyName = 'Email Input';
