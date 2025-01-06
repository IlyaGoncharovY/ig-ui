import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { CircleCanvas, CircleCanvasProps } from './CircleCanvas';

export default {
  title: 'components/CircleCanvas',
  component: CircleCanvas,
  args: {
    radius: 10,
    speedY: 2,
    speedX: 1,
    color: '#6d6d6d',
    monthMarker: undefined,
  },
} as Meta<CircleCanvasProps>;

const Template: StoryFn<CircleCanvasProps> = (args) => <CircleCanvas {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomSnowflakes = Template.bind({});
CustomSnowflakes.args = {
  radius: 15,
  speedY: 3,
  color: 'rgba(0, 255, 255, 0.6)',
};

export const OnlyInDecember = Template.bind({});
OnlyInDecember.args = {
  monthMarker: 11, // Отрисовывать только в декабре
};
