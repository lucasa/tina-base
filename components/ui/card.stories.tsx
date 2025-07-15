import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from './card';

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

export const Default: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 300 }}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>Some interesting content.</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
};
