import type { Meta, StoryObj } from '@storybook/react';
import Tasklist from './Tasklist';

const meta: Meta<typeof Tasklist> = {
    component: Tasklist,
};

export default meta;
type Story = StoryObj<typeof Tasklist>;

export const DefaultList: Story = {}

