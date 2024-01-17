import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checkedChildren: { description: 'checkedChildren description', defaultValue: '', control: 'text' },
    unCheckedChildren: { description: 'unCheckedChildren description', control: 'text' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {
  args: {
    checkedChildren: '开启',
    unCheckedChildren: '关闭',
  },
};

export const WithoutText: Story = {
  args: {
    defaultChecked: true,
  },
};

export const SmallSize: Story = {
  args: {
    checkedChildren: '开启',
    unCheckedChildren: '关闭',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
