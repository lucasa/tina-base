import type { Meta, StoryObj } from '@storybook/react';
import { Video, videoBlockSchema } from './video';

const meta: Meta<typeof Video> = {
  component: Video,
  args: { data: videoBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Video> = {};
