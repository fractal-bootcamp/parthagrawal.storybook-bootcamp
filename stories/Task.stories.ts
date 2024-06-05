import type { Meta, StoryObj } from '@storybook/react';
import { Task, TaskProps } from './Task';



const meta: Meta<typeof Task> = {
    component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

const defaultTask: TaskProps = {
    completeStatus: true,
    description: "Test task 1",
    title: "Here is the description"
}


export const Complete: Story = {
    args:
    {
        ...defaultTask
    }
}

export const Incomplete: Story = {
    args:
    {
        ...defaultTask,
        completeStatus: false // Here you render everything and, after that rendering, you render the change to false.

    }
}






