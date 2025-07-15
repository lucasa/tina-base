import type { Meta, StoryObj } from '@storybook/react';
import { MicroDonationBlock, microDonationBlockSchema } from './MicroDonationBlock';

const meta: Meta<typeof MicroDonationBlock> = {
  component: MicroDonationBlock,
  args: { ...microDonationBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof MicroDonationBlock> = {};
