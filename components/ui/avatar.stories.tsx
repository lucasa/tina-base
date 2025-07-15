import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};
export default meta;

export const WithImage: StoryObj<typeof Avatar> = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://placekitten.com/100/100" alt="Kitten" />
      <AvatarFallback>KT</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: StoryObj<typeof Avatar> = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};
