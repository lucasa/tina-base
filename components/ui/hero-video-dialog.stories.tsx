import type { Meta, StoryObj } from '@storybook/react';
import HeroVideoDialog from './hero-video-dialog';
import { VideoDialogProvider } from './VideoDialogContext';

const meta: Meta<typeof HeroVideoDialog> = {
  component: HeroVideoDialog,
  args: {
    videoSrc: 'https://www.youtube.com/embed/j8egYW7Jpgk',
    thumbnailSrc: 'https://placekitten.com/800/450',
  },
  decorators: [
    (Story) => (
      <VideoDialogProvider>
        <Story />
      </VideoDialogProvider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof HeroVideoDialog> = {};
