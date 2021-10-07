import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import appState from "./mobx/state";
import { MobXCounter } from "./MobXCounter";
import addReducer from "./redux/reducers";
import ReduxCounter from "./ReduxCounter";

const store = createStore(addReducer);

function App() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: e.target.value,
          completed: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  return (
    <div className="App">
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
      <MobXCounter appState={appState} />
      </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  let cls = [""];

  if (checked) {
    cls.push("completed");
  } else {
    cls = [""];
  }
  return (
    <li className={cls.join(" ")}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          console.log(checked);
        }}
      />
      {/* <span>Is checked? {checked}</span> */}
      <span>{title}</span>
    </li>
  );
}

export default App;
