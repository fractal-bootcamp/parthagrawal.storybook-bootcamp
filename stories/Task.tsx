
// Task is a JSX component. Task needs
// data, passed as props, of type TaskProps.

export type TaskProps = {
    completeStatus: boolean
    title: string
    description: string
    taskColor: string
    checkboxColor: string

}

function clickChange(completeStatus: boolean) {
    console.log(completeStatus)
    completeStatus = !completeStatus
    console.log(completeStatus)

    return (
        completeStatus
    )
}
export const Task = ({
    completeStatus,
    title,
    description,

}: TaskProps) => {

    const taskColor = completeStatus ? "lightgreen" : "white"
    const checkboxColor = completeStatus ? "green" : "white"

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
                    onClick={() => (clickChange(completeStatus))}
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
        </div>
    )




}

// Looks like the props for this task are going to be 
// background color
// checkbox color
// task status