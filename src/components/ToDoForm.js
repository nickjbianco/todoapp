import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

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
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Add To Do</Button>
    </form>
  );
};

export default ToDoForm;
