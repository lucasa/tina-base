import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial, testimonialBlockSchema } from './testimonial';

const meta: Meta<typeof Testimonial> = {
  component: Testimonial,
  args: { data: testimonialBlockSchema.ui.defaultItem as any },
};
export default meta;

export const Default: StoryObj<typeof Testimonial> = {};
