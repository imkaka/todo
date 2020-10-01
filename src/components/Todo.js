import React from "react";

export default function Todo({ task, taskType, onComplete, onDelete }) {
  return (
    <div>
      <button onClick={() => onComplete(task, taskType)}>Done</button>
      <button onClick={() => onDelete(task, taskType)}>Remove</button>
      <h3>{task.title}</h3>
    </div>
  );
}
