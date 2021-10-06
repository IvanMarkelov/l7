import { observer } from "mobx-react";
import React, { useState } from "react";

export const TodoList = observer(({ store }) => {
  const [value, setValue] = useState("");

  const handleNewTodo = () => {
    if (value !== "") {
      store.addTodo(value);
      setValue("");
    }
  };

  const status = store.status;
  console.log(status);

  const handleTodoStatus = (index) => {
    store.changeTodoStatus(index);
  };

  return (
    <div>
      <h1>todo list</h1>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleNewTodo}>add todo</button>
      <h3>
        Completed tasks: {status.completedTodos}, Unfinished tasks:{" "}
        {status.pendingTodos}
      </h3>
      <ul>
        {store.todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => handleTodoStatus(index)}
            />
            <span>
              {todo.name} {todo.completed && "COMPLETED"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});
