import React, { Component } from "react";
import axios from "axios";
import { Button, Table, Card, ToggleButton } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import Issue from "./Issue";
import AddIssueComponent from "./AddIssueComponent";
import { observer } from "mobx-react";

class IssuesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
    this.props.store.getIssues();
  }

  render() {
    const { store } = this.props;
    return (
      <>
        <div
          className="issues"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px",
            gap: "25px",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
        >
          {store.issues.map((issue) => (
            <Issue key={issue.id} store={store} issue={issue} />
          ))}
        </div>
      </>
    );
  }
}

export default observer(IssuesList);
