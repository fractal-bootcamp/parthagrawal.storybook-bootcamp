
type Task = {
    completeStatus: boolean
    title: string
    description: string
    backgroundColor: string
    checkboxColor: string

}
export const Task = () => {

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
            ">
                {/* two columns */}

                <div className="border rounded-md border-solid w-[25px] h-[25px] font-sans ">

                </div>
                {/* title and desc */}
                <div className="flex flex-col">
                    <h2 className="text-lg">
                        Sweep the Kitchen
                    </h2>
                    <p className="text-xs text-gray-400">
                        Get under the cabinets, do a good job
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