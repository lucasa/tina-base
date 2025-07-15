import type { Meta, StoryObj } from '@storybook/react';
import { Content, contentBlockSchema } from './content';

const meta: Meta<typeof Content> = {
  component: Content,
  args: { data: contentBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Content> = {};
