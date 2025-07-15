import type { Meta, StoryObj } from '@storybook/react';
import { Huddle01BroadcastBlock, huddle01BroadcastBlockSchema } from './Huddle01BroadcastBlock';

const meta: Meta<typeof Huddle01BroadcastBlock> = {
  component: Huddle01BroadcastBlock,
  args: { ...huddle01BroadcastBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof Huddle01BroadcastBlock> = {};
