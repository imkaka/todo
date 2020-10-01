import React, { useState } from "react";

export default function TodoForm({ onAdd, taskType }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    if (e.target.value !== "") setTitle(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(title, taskType);
        setTitle("");
      }}
    >
      <input type="text" value={title} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}
