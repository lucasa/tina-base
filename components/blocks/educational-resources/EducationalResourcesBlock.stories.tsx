import type { Meta, StoryObj } from '@storybook/react';
import { EducationalResourcesBlock, educationalResourcesBlockSchema } from './EducationalResourcesBlock';

const meta: Meta<typeof EducationalResourcesBlock> = {
  component: EducationalResourcesBlock,
  args: { ...educationalResourcesBlockSchema.ui.defaultItem } as any,
};
export default meta;

export const Default: StoryObj<typeof EducationalResourcesBlock> = {};
