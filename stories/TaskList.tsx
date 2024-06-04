import { useState } from "react"
import { Task, TaskDetails, TaskProps } from "./Task"

export const initialTasks: TaskDetails[] = [
    {
        // why does this break when I add parentheses to whenChild? 
        id: 1,
        completeState: true,
        title: "Task 1",
        description: "this is the description of a very fun task"
    },
    {
        id: 2,
        completeState: false,
        title: "Task 2",
        description: "this is a not so fun task"
    }
]




export const TaskList = () => {
    // QUESTION: what should the default here be? 
    const [tasks, setTasks] = useState(initialTasks)

    // TODO: every task needs to have an id
    function toggleSelectedTask(id: number) {
        const theTaskWeAreChangingIndex = tasks.findIndex((task) => { task.id === id })
        if (theTaskWeAreChangingIndex < 0) return
        const oldTask = tasks[theTaskWeAreChangingIndex]
        const newTask = { ...oldTask, completeState: !oldTask.completeState }
        tasks[theTaskWeAreChangingIndex] = newTask
        setTasks(tasks)
    }


    // map function that renders props in each task into a task component
    // which then gets rendered in tasklist (by the map function)

    function mapTaskPropsToTask({ whenMyCheckboxClicked: updateState, completeState, title, description }: TaskProps, index: number) {
        return (
            <Task whenMyCheckboxClicked={toggleSelectedTask} completeState={completeState} title={title} description={description} />
        )

    }


    return (
        <div>
            {tasks.map(mapTaskPropsToTask)}
        </div>
    )


}

/*

Alright it's time to create a TaskList.

What's the correct datastructure for a tasklist? 
An array of tasks.

Each task will have props specific to itself.

We can include a dummyData array which contains several tasks 
The TaskListProps will be 

The taskList will also need to be sorted by completion.

So, there needs to be some way to dynamically detect when a task's completion
has been updated and change the state of the tasklist when that happens.

I think the first step that I need to take before building tasklist is 
to make the tasks' checkboxes themselves clickable. 

*/
