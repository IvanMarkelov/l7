import { observer } from "mobx-react";
import React, { Component } from "react";

class DevelopersList extends Component {
  render() {
    const { store } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>SP:</td>
          </tr>
        </thead>
        <tbody>
          {store.devList.map((dev, i) => (
            <Row key={i} data={dev}></Row>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Team SP:</td>
            <td>{store.totalSum}</td>
          </tr>
          <tr>
            <td>Top performer:</td>
            <td>{store.topPerformer ? store.topPerformer.name : ""}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const Row = ({ data: { name, sp } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{sp}</td>
    </tr>
  );
};

export default observer(DevelopersList);
