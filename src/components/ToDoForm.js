import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({ addToDo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completeded: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addToDo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default ToDoForm;
