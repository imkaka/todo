import React from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoTask({
  tasks,
  taskType,
  onAdd,
  onDelete,
  onComplete,
}) {
  return (
    <div>
      <TodoForm onAdd={onAdd} taskType={taskType} />
      {tasks.map((task, index) => (
        <Todo
          key={index}
          task={task}
          taskType={taskType}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
