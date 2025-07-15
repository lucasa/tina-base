import type { Meta, StoryObj } from '@storybook/react';
import { CollaborativeMapBlock, collaborativeMapBlockSchema } from './CollaborativeMapBlock';

const meta: Meta<typeof CollaborativeMapBlock> = {
  component: CollaborativeMapBlock,
  args: { ...collaborativeMapBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof CollaborativeMapBlock> = {};
