import React from "react";

export default function Todo({ task, taskType, onComplete, onDelete }) {
  const getStyle = (task) => {
    let styles = {
      textDecoration: "none",
      margin: "1rem",
    };

    if (task.isCompleted) {
      styles.textDecoration = "line-through";
    }
    return styles;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => onComplete(task, taskType)}>Done</button>
      <button onClick={() => onDelete(task, taskType)}>Remove</button>
      <h3 style={getStyle(task)}>{task.title}</h3>
    </div>
  );
}
