import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do</h1>
        <ToDoForm addToDo={addToDo} />
      </header>
    </div>
  );
};

export default App;
