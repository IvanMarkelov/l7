import { action, observable } from "mobx";
import React from "react";

const appState = observable({
  count: 0,
  decrement: action(() => {
    --appState.count;
  }),
  increment: action(() => {
    ++appState.count;
  }),
});

export default appState;
