import React, { useState } from "react";

export const TodoForm = ({ addTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task Today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
