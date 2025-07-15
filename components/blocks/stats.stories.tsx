import type { Meta, StoryObj } from '@storybook/react';
import { Stats, statsBlockSchema } from './stats';

const meta: Meta<typeof Stats> = {
  component: Stats,
  args: { data: statsBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Stats> = {};
