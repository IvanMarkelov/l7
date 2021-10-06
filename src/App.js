import React from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import TodoStore from "./TodoStore";

const todoStore = new TodoStore();

function App() {
  return (
    <div className="App">
      <TodoList store={todoStore} />
    </div>
  );
}

export default App;
