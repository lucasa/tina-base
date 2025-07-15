import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteSlider } from './infinite-slider';
import { Button } from './button';

const meta: Meta<typeof InfiniteSlider> = {
  component: InfiniteSlider,
  args: {
    speed: 100,
  },
};
export default meta;

export const Horizontal: StoryObj<typeof InfiniteSlider> = {
  render: (args) => (
    <InfiniteSlider {...args} style={{ maxWidth: 300 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Button key={i}>Item {i + 1}</Button>
      ))}
    </InfiniteSlider>
  ),
};

export const Vertical: StoryObj<typeof InfiniteSlider> = {
  args: { direction: 'vertical' },
  render: (args) => (
    <InfiniteSlider {...args} style={{ height: 150 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Button key={i}>Item {i + 1}</Button>
      ))}
    </InfiniteSlider>
  ),
};
