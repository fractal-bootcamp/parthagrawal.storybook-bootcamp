// import React from "react"
// import { Task, TaskProps } from "./Task"



// const taskDummyData= [
//     {

//         title: "Sweep the Kitchen",
//         description: "Get under the cabinets, do a good job",
//         completeStatus: false
//     },

//     {

//         title: "Wash the Dishes",
//         description: "Use hot water and soap",
//         completeStatus: false
//     },
//     {

//         title: "Mow the Lawn",
//         description: "Don't forget the edges",
//         completeStatus: false
//     },
//     {

//         title: "Do the Laundry",
//         description: "Separate colors and whites",
//         completeStatus: false
//     },
//     {
//         title: "Organize the Garage",
//         description: "Sort tools and equipment",
//         completeStatus: false
//     }
// ]

// export default function TaskList() {
// const deployDummyData= taskDummyData.map(
//     (item)=> {
//         <Task completeStatus={item.completeStatus} title={item.title} description={item.description} 
//         />
//     }
// )

//     return (
//         <>
//         {deployDummyData}
//         </>
//     )
// }
// 
// 
// 
// 
// 

const Task = () => {
    return
    <div className=" flex flex-row">
        <input type="checkbox" />
        <div className= "flex flex-cpl">
            <h3>Task Title</h3>
            <p>
                Task description
            </p>
        </div>
    </div>
}

function TaskList() {
    return(
        <div>
            <h2>TaskList</h2>
            <Task />
        </div>
    )
}


