import React, { Component } from "react";
import IssuesList from "./issues/IssuesList";
import AddIssueComponent from "./issues/AddIssueComponent";
import PopupComponent from "./issues/popups/PopupComponent";

export default class IssuesMainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <PopupComponent text="Добавить issue">
          <AddIssueComponent addIssue={this.handleAddIssue}/>
        </PopupComponent>

        <IssuesList />
      </>
    );
  }
}
