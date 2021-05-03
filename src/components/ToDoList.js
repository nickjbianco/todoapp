import React from "react";
import ToDo from "./ToDo";
import { List } from "@material-ui/core";

const ToDoList = ({ todos, toggleComplete, removeToDo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeToDo={removeToDo}
        />
      ))}
    </List>
  );
};

export default ToDoList;
