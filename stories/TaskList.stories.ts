import type { Meta, StoryObj } from '@storybook/react'
//question - what is meta doing? 

import { Task } from "./Task";
import { TaskList } from "./TaskList";

const meta: Meta<typeof TaskList> = {
    title: 'TaskList / TaskList',
    component: TaskList
}

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {

}

// unsorted and sorted states ?