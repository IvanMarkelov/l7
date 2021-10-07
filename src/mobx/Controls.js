import { observer } from "mobx-react";
import React, { Component } from "react";

class DeveloperControls extends Component {
  addDeveloper = () => {
    this.props.store.getDev();
    const developer = this.props.store.newDev;
    this.props.store.addDev({
      name: developer.name ? developer.name : "Unknown",
      sp: developer.sp,
    });
  };

  clearList = () => {
    this.props.store.clearStoreList();
  };

  render() {
    return (
      <div>
        <button onClick={this.clearList}>Clear table</button>
        <button onClick={this.addDeveloper}>Add developer</button>
      </div>
    );
  }
}

export default observer(DeveloperControls);
