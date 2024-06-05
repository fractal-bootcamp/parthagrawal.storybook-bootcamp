
// Task is a JSX component. Task needs
// data, passed as props, of type TaskProps.

import { useState } from "react"


export type TaskDetails = {
    completeState: boolean
    title: string
    description: string
    id: number
}

export type TaskProps = {
    task: TaskDetails,
    toggleThisTask: () => void,
}


export const Task = ({
    task,
    toggleThisTask,
}: TaskProps) => {

    const { completeState, title, description, id } = task;
    // const [stateComplete, clickChange] = useState(false);

    const taskColor = completeState ? "lightgreen" : "white"
    const checkboxColor = completeState ? "green" : "white"

    return (
        // container
        <div className="justify-center">
            {/* outer container */}
            <div className="
            flex 
            flex-row 
            rounded-md
            border 
            border-solid 
            gap-4 
            items-center 
            px-5 
            py-3
            w-[460px]
            "
                style={{ backgroundColor: taskColor }}>
                {/* two columns */}

                {/* checkbox */}
                <div
                    onClick={() => toggleThisTask()}
                    className="border rounded-md border-solid w-[25px] h-[25px] font-sans"
                    style={{ backgroundColor: checkboxColor }} >

                </div>
                {/* title and desc */}
                <div className="flex flex-col">
                    <h2 className="text-lg">
                        {title}
                    </h2>
                    <p className="text-xs text-gray-400">
                        {description}
                    </p>
                </div>

            </div>
        </div >
    )




}

// Looks like the props for this task are going to be 
// background color
// checkbox color
// task status