import React, { useState } from "react";
import "./App.css";

import TodoTask from "./components/TodoTask";
import TodoHeader from "./components/TodoHeader";

import { TaskType } from "./constants/TodoConstants";
import Home from './containers/Home';

function App() {
  const [personalTasks, setPersonalTasks] = useState([
    {
      title: "Exercise daily",
      isCompleted: false,
    },
    {
      title: "Drink Water daily",
      isCompleted: true,
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
    const newTasks = currentTasks.filter((t) => t !== task);
    setTasks(newTasks);
  };

  const handleAdd = (title, taskType) => {
    // Don't create task for empty submit
    if (title === "") {
      return;
    }

    let [currentTasks, setTasks] = getTasks(taskType);

    const newTask = {
      title,
      isCompleted: false,
    };
    const newTasks = [...currentTasks, newTask];
    setTasks(newTasks);
  };

  const handleComplete = (task, taskType) => {
    const [currentTasks, setTasks] = getTasks(taskType);

    const taskIndex = currentTasks.indexOf(task);
    let completedTask = currentTasks[taskIndex];

    let newTasks = [...currentTasks];
    completedTask.isCompleted = true;
    newTasks[taskIndex] = completedTask;

    setTasks(newTasks);
  };

  const getPendingTaskCount = () => {
    const pendingFamilyTasksCount = familyTasks.filter(
      (t) => t.isCompleted === false
    ).length;

    const pendingPersonalTasksCount = personalTasks.filter(
      (t) => t.isCompleted === false
    ).length;

    const pendingWorkTasksCount = workTasks.filter(
      (t) => t.isCompleted === false
    ).length;

    return (
      pendingFamilyTasksCount +
      pendingPersonalTasksCount +
      pendingWorkTasksCount
    );
  };

  return (
    <div className="App">
      <div className="side-container">
        <div></div>
        <div className="main-screen">
          <Home />
        </div>
        <div></div>
      </div>
      {/* <div className="side-container">
        <div></div>
        <div></div>
      </div> */}
      {/* <TodoHeader totalTasks={getPendingTaskCount()} />
      <TodoTask
        tasks={personalTasks}
        taskType={TaskType.personal}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onComplete={handleComplete}
      /> */}
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
