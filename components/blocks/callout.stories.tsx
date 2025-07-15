import type { Meta, StoryObj } from '@storybook/react';
import { Callout, calloutBlockSchema } from './callout';

const meta: Meta<typeof Callout> = {
  component: Callout,
  args: { data: calloutBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Callout> = {};
