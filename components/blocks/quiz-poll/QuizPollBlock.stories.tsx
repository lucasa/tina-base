import type { Meta, StoryObj } from '@storybook/react';
import { QuizPollBlock, quizPollBlockSchema } from './QuizPollBlock';

const meta: Meta<typeof QuizPollBlock> = {
  component: QuizPollBlock,
  args: { ...quizPollBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof QuizPollBlock> = {};
