import type { Meta, StoryObj } from '@storybook/react';
import { ProgressiveBlur } from './progressive-blur';

const meta: Meta<typeof ProgressiveBlur> = {
  component: ProgressiveBlur,
  args: {
    blurIntensity: 1,
    blurLayers: 6,
  },
};
export default meta;

export const Default: StoryObj<typeof ProgressiveBlur> = {
  render: (args) => (
    <div style={{ height: 100, width: 300, background: '#ddd' }}>
      <ProgressiveBlur {...args} />
    </div>
  ),
};
