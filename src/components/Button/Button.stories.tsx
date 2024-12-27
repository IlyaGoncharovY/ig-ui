import React from "react";
import {Meta, StoryFn} from "@storybook/react";

import {Button, ButtonProps} from "./Button";

export default {
    title: 'components/Button',
    component: Button,
    args: {
        children: 'Click me',
        disabled: false,
    },
    parameters: {
        controls: {
            exclude: []
        }
    }
} as Meta<ButtonStoryProps>

type ButtonStoryProps = Pick<ButtonProps, 'className' | 'children'>

export const ButtonStoryTemplate: StoryFn<ButtonStoryProps> = ({...args}) => (
    <Button {...args} />
);

ButtonStoryTemplate.storyName = 'Button';
