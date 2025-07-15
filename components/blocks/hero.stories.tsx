import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './hero';

const sample = {
  headline: 'This Big Text is Totally Awesome',
  tagline: "Here's some text above the other text",
  actions: [
    { label: 'Get Started', type: 'button', link: '/', icon: null },
  ],
  image: {
    src: '/blocks/hero.png',
    alt: 'Hero Image',
  },
};

const meta: Meta<typeof Hero> = {
  component: Hero,
  args: { data: sample as any },
};
export default meta;

export const Default: StoryObj<typeof Hero> = {};
