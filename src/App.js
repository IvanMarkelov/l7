import React from "react";
import "./App.css";
import DeveloperControls from "./mobx/Controls";
import DevelopersList from "./mobx/DevelopersList";
import DevelopersStore from "./mobx/DevelopersStore";

const devStore = new DevelopersStore();

function App() {
  return (
    <div className="App">
      {/* <DevTools /> */}
      <DevelopersList store={devStore} />
      <DeveloperControls store={devStore} />
    </div>
  );
}

export default App;
