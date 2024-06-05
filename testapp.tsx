const initialTasks = [
    {
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, utensils",
        completed: true
    },
    {
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, utensils",
        completed: true
    },
    {
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, utensils",
        completed: true
    },
    {
        title: "Dishwashing",
        description: "Wash and dry dishes, pots, pans, utensils",
        completed: true
    }

]

function TaskList() {
    return (
        <div>
            {initialTasks.map(
                (task) => <div>{task.title}</div>
            )}
        </div>
    )
}

export default TaskList;
