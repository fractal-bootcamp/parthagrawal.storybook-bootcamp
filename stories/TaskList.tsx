import { useState } from "react"
import { Task, TaskDetails, TaskProps } from "./Task"

export const initialTasks: TaskDetails[] = [
    {
        // why does this break when I add parentheses to whenChild? 
        completeState: true,
        title: "Task 1",
        description: "this is the description of a very fun task"
    },
    {
        completeState: false,
        title: "Task 2",
        description: "this is a not so fun task"
    }
]




export const TaskList = () => {
    // QUESTION: what should the default here be? 
    const [tasks, setTasks] = useState(initialTasks)




    // map function that renders props in each task into a task component
    // which then gets rendered in tasklist (by the map function)

    function mapTaskPropsToTask(task: TaskDetails, index: number) {
        // TODO: every task needs to have an id
        function updateTask(idxx: number) {
            const oldTasks = tasks
            const unflippedTask = oldTasks[idxx]
            const flippedTask: TaskDetails = {
                ...unflippedTask, completeState: !unflippedTask.completeState
            };


            function createNewTasksArray(task: TaskDetails, taskIndex: number) {
                if (idxx === taskIndex) {

                    return flippedTask;
                }
                else {
                    return oldTasks[taskIndex];
                }
            }
            // returns an array
            const newTasks = oldTasks.map(createNewTasksArray)
            setTasks(newTasks)

        }

        return (
            <Task task={task} toggleThisTask={() => { updateTask(index) }} />
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
