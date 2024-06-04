import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Task, TaskProps } from './Task';
import "app/tailwind.css"

const meta: Meta<typeof Task> = {
    component: Task,
}

export default meta;
type Story = StoryObj<typeof Task>;

const defaultTask: TaskProps = {
    completeStatus: true,
    description: "asdfasdf df sadf asddf dsf adsf dsfads dsf ",
    title: "I'm a task",
    taskColor: "#E2FFE5",
    checkboxColor: "green"
}

export const Complete: Story = {
    args: {
        // ... copies props from a previously defined set of props
        ...defaultTask,

        completeStatus: false
    }
}

export const Incomplete: Story = {
    args: {
        ...defaultTask,
        completeStatus: false,
        taskColor: "white",
        checkboxColor: "white"
    }
}



