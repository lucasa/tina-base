import type { Meta, StoryObj } from '@storybook/react';
import { CallToAction, ctaBlockSchema } from './call-to-action';

const meta: Meta<typeof CallToAction> = {
  component: CallToAction,
  args: { data: ctaBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof CallToAction> = {};
