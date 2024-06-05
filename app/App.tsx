import React, { useState } from "react";


const textBlockStyleProps: React.CSSProperties ={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "462px",
  padding: "20px", 
}




interface Task {
  title: string;
  description: string;
  checked: boolean;
}

// Uncontrolled Component - a component that manages its own state
// Controlled Component - a component that is controlled by a parent component


const Task = ({
  task,
  onToggle,
}:
  { task: Task;
      onToggle: ()=> void;
  }) => {
  // const [checked, setChecked] = useState(false); 

const backgroundColor = task.checked ? "#E2FFE5" : "#FFFFFF";

  return (
    <>
  <div className="flex flex-row"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor,
      }}
  
  >
      <input
      checked={task.checked}
      onClick={onToggle}
      type="checkbox"
      style={{ color: "green" }}
      />
      <div className= "flex flex-col" 
      style={textBlockStyleProps}
      >
      
          <h3>{task.title}</h3>
          <p>{task.description}</p>
      </div>
  </div>
  </>
  );
};

const mockTasks = [
  {
      title: "Wash the dishes",
      description: "Wash them really well",
      checked: false
  },
  {
      title: "Clean the windows",
      description: "Do not forget the corners",
      checked: true
  },
  {
      title: "Vacuum the carpet",
      description: "And under it as well",
      checked: false
  },
];


function TaskList() {
const [tasks, setTasks] =useState(mockTasks);

const updateTask = (idx: number) => {
  const updatedTasks = tasks.map ((task,index) => {
    if (index === idx) {
      return {
        ...task,
        checked: !task.checked
      }
    }
    return task;

  });

    const sortedTasks = updatedTasks.sort((a,b) => {
      if (a.checked && !b.checked) {
        return -1;
      }
      if (!a.checked && !b.checked) {
        return 1;
      }
      return 0;
    })
  setTasks(sortedTasks);
}

return (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h2>TaskList</h2>
    {tasks.map((task, idx) => {
      // For this task specifically, create a new, more specific function that
      // only toggles the task at this id
      const onToggleThisTask = () => updateTask(idx);

      return <Task task={task} onToggle={onToggleThisTask} />;
    })}
  </div>
);
}
export default TaskList;
