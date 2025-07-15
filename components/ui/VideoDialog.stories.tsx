import type { Meta, StoryObj } from '@storybook/react';
import VideoDialog from './VideoDialog';
import { VideoDialogProvider, useVideoDialog } from './VideoDialogContext';
import { Button } from './button';

const meta: Meta<typeof VideoDialog> = {
  component: VideoDialog,
  decorators: [
    (Story) => (
      <VideoDialogProvider>
        <Trigger />
        <Story />
      </VideoDialogProvider>
    ),
  ],
};
export default meta;

const Trigger = () => {
  const { openVideo } = useVideoDialog();
  return (
    <Button onClick={() => openVideo('https://www.youtube.com/embed/j8egYW7Jpgk')}>
      Abrir Vídeo
    </Button>
  );
};

export const Default: StoryObj<typeof VideoDialog> = {};
