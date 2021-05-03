import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ToDo = ({ todo, toggleComplete, removeToDo }) => {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeToDo(todo.id);
  };

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckBoxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default ToDo;
