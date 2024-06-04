import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Task, TaskProps } from './Task';
import "app/tailwind.css"
import { whenChildCheckboxClicked } from './TaskList';

const meta: Meta<typeof Task> = {
    component: Task,
}

export default meta;
type Story = StoryObj<typeof Task>;

const defaultTask: TaskProps = {
    completeState: true,
    description: "asdfasdf df sadf asddf dsf adsf dsfads dsf ",
    title: "I'm a task",
    whenChildCheckboxClicked: whenChildCheckboxClicked

}

export const Complete: Story = {
    args: {
        // ... copies props from a previously defined set of props
        ...defaultTask,

    }
}

export const Incomplete: Story = {
    args: {
        ...defaultTask,
        completeState: false

    }
}



