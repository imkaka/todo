import React, { useState } from "react";
import "./App.css";

import TodoTask from "./components/TodoTask";
import TodoHeader from "./components/TodoHeader";

import { TaskType } from "./constants/TodoConstants";

function App() {
  const [personalTasks, setPersonalTasks] = useState([
    {
      title: "Exercise daily",
      is_completed: false,
    },
    {
      title: "Drink Water daily",
      is_completed: true,
    },
  ]);

  const [familyTasks, setfamilyTasks] = useState([]);
  const [workTasks, setworkTasks] = useState([]);

  const getTasks = (taskType) => {
    if (taskType === TaskType.personal) {
      return [personalTasks, setPersonalTasks];
    } else if (taskType === TaskType.family) {
      return [familyTasks, setfamilyTasks];
    } else {
      return [workTasks, setworkTasks];
    }
  };

  const handleDelete = (task, taskType) => {
    const [currentTasks, setTasks] = getTasks(taskType);
  };

  const handleAdd = (title, taskType) => {
    // Don't create task for empty submit
    if (title === "") {
      return;
    }

    let [currentTasks, setTasks] = getTasks(taskType);

    const newTask = {
      title,
      is_completed: false,
    };
    const newTasks = [...currentTasks, newTask];
    setTasks(newTasks);
  };

  const handleComplete = (task, taskType) => {
    // let currentTasks = getTasks(taskType);
    console.log(task, taskType);
  };

  return (
    <div className="app">
      <TodoHeader
        totalTasks={
          personalTasks.length + familyTasks.length + workTasks.length
        }
      />
      <TodoTask
        tasks={personalTasks}
        taskType={TaskType.personal}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onComplete={handleComplete}
      />
      {/* <TodoTask
        tasks={familyTasks}
        taskType={TaskType.family}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onComplete={handleComplete}
      /> */}
      {/* <TodoTask
        tasks={workTasks}
        taskType={TaskType.work}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onComplete={handleComplete}
      /> */}
    </div>
  );
}

export default App;
