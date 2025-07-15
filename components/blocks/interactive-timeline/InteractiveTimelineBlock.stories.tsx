import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveTimelineBlock, interactiveTimelineBlockSchema } from './InteractiveTimelineBlock';

const meta: Meta<typeof InteractiveTimelineBlock> = {
  component: InteractiveTimelineBlock,
  args: { ...interactiveTimelineBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof InteractiveTimelineBlock> = {};
