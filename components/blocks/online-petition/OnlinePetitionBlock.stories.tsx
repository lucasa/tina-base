import type { Meta, StoryObj } from '@storybook/react';
import { OnlinePetitionBlock, onlinePetitionBlockSchema } from './OnlinePetitionBlock';

const meta: Meta<typeof OnlinePetitionBlock> = {
  component: OnlinePetitionBlock,
  args: { ...onlinePetitionBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof OnlinePetitionBlock> = {};
