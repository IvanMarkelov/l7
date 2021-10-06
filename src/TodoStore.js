import { action, computed, makeObservable, observable } from "mobx";
import React from "react";

class TodoStore {
  todos = [{ name: "first", completed: true }];

  constructor() {
    makeObservable(this, {
      todos: observable,
      status: computed,
      addTodo: action,
      changeTodoStatus: action,
    });
  }

  addTodo(todoName) {
    this.todos.push({
      name: todoName,
      completed: false,
    });
  }

  changeTodoStatus(id) {
    this.todos[id].completed = !this.todos[id].completed;
  }

  get status() {
    let completedTodos = 0;
    let pendingTodos = 0;
    this.todos.forEach((todo) => {
      if (todo.completed) {
        ++completedTodos;
      } else {
        ++pendingTodos;
      }
    });
    return { completedTodos, pendingTodos };
  }
}

export default TodoStore;
