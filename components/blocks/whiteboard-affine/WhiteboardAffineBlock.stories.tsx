import type { Meta, StoryObj } from '@storybook/react';
import { WhiteboardAffineBlock, whiteboardAffineBlockSchema } from './WhiteboardAffineBlock';

const meta: Meta<typeof WhiteboardAffineBlock> = {
  component: WhiteboardAffineBlock,
  args: { ...whiteboardAffineBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof WhiteboardAffineBlock> = {};
