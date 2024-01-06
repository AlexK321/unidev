import type { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioItem } from './Radio';

const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Double: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Triple: Story = {
  args: {
    label: 'Button',
  },
};
