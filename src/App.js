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
  return (
    <div className="App">
      <Provider store={store}>
        <ReduxCounter />
      </Provider>
      <MobXCounter appState={appState} />
    </div>
  );
}

export default App;
