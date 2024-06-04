import { useState } from "react"
import { Task, TaskProps } from "./Task"

export const taskArray: TaskProps[] = [
    {
        // why does this break when I add parentheses to whenChild? 
        whenChildCheckboxClicked: whenChildCheckboxClicked,
        completeState: true,
        title: "Task 1",
        description: "this is the description of a very fun task"
    },
    {
        whenChildCheckboxClicked: whenChildCheckboxClicked,
        completeState: false,
        title: "Task 2",
        description: "this is a not so fun task"
    }

]



// map function that renders props in each task into a task component
// which then gets rendered in tasklist (by the map function)

function mapTaskPropsToTask({ whenChildCheckboxClicked: updateState, completeState, title, description }: TaskProps, index: number) {
    return (
        <Task whenChildCheckboxClicked={whenChildCheckboxClicked} completeState={completeState} title={title} description={description} />
    )

}

export function whenChildCheckboxClicked() {

    //updating the tasklist array and its child components
    // the way that it does that, is by editing the state variable

    console.log("hello")

    // looks wrong, feels wrong!

}


export const TaskList = () => {

    const [TaskList, whenChildCheckboxClicked] = useState([])


    return (
        <div>
            {taskArray.map(mapTaskPropsToTask)}
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
