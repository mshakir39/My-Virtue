import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, IButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button'
} as Meta;

const ButtonTemplate: Story<IButtonProps> = args => <Button {...args} />;

export const ButtonStory = ButtonTemplate.bind({});

ButtonStory.args = {
  label: 'This is a button',
  onClick: action('Button clicked')
};

ButtonStory.storyName = 'Button';
