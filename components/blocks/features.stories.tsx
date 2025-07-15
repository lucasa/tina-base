import type { Meta, StoryObj } from '@storybook/react';
import { Features, featureBlockSchema } from './features';

const meta: Meta<typeof Features> = {
  component: Features,
  args: { data: featureBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Features> = {};
