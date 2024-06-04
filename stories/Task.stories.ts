import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Task } from './Task';
import "app/tailwind.css"

const meta: Meta<typeof Task> = {
    component: Task,
}

export default meta;
type Story = StoryObj<typeof Task>;

export const Primary: Task = {
    args: {
        primary: true,
        label: 'Button',
    }
}



