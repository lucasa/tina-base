import type { Meta, StoryObj } from '@storybook/react';
import { StoryGalleryBlock, storyGalleryBlockSchema } from './StoryGalleryBlock';

const meta: Meta<typeof StoryGalleryBlock> = {
  component: StoryGalleryBlock,
  args: { ...storyGalleryBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof StoryGalleryBlock> = {};
