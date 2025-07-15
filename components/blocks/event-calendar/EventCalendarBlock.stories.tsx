import type { Meta, StoryObj } from '@storybook/react';
import { EventCalendarBlock, eventCalendarBlockSchema } from './EventCalendarBlock';

const meta: Meta<typeof EventCalendarBlock> = {
  component: EventCalendarBlock,
  args: { ...eventCalendarBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof EventCalendarBlock> = {};
