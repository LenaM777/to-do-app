import React, { useState } from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTask(userInput) {
    if (userInput.trim() !== "") {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false,
      };

      setTodos([newTask, ...todos]);
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
    </div>
  );
};

export default App;
