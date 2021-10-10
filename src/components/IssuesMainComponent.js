import React, { Component } from "react";
import { observer } from "mobx-react";
import IssuesList from "./issues/IssuesList";
import AddIssueComponent from "./issues/AddIssueComponent";
import PopupComponent from "./issues/popups/PopupComponent";
import IssuesStore from "./issues/store/IssuesStore";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Comments from "./comments/Comments";
import Tasktracker from "./issues/Tasktracker";

const issuesStore = new IssuesStore();

export default class IssuesMainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingValue: "2",
    };
  }

  handleSelect = (e) => {
    this.setState({ sortingValue: e.target.value });
    this.sortIssues(e.target.value);
  };

  sortIssues = (value) => {
    switch (value) {
      case "1":
        issuesStore.sortByNumber();
        break;
      case "2":
        issuesStore.reverseSortByNumber();
        break;
      case "3":
        issuesStore.sortByTitle();
        break;
      case "4":
        issuesStore.reverseSortByTitle();
        break;
      case "5":
        issuesStore.sortByCreated();
        break;
      case "6":
        issuesStore.reverseSortByCreated();
        break;
      default:
        break;
    }
  };

  updatePage = () => {
    issuesStore.getIssues();
    this.sortIssues(this.state.sortingValue);
  };

  render() {
    return (
      <>
        <Button style={{ marginRight: "10px" }} onClick={this.updatePage}>
          Обновить
        </Button>
        <PopupComponent text="Добавить issue">
          <AddIssueComponent store={issuesStore} />
        </PopupComponent>

        <SortListComponent
          handleSelect={this.handleSelect}
          store={issuesStore}
        />
        {/* <Tasktracker store={issuesStore} /> */}
        <IssuesList store={issuesStore} />
      </>
    );
  }
}

export const SortListComponent = observer((props) => {
  return (
    <Form.Control
      defaultValue="2"
      style={{ marginLeft: "10px", maxWidth: "30%" }}
      onChange={props.handleSelect}
      as="select"
      aria-label="Default select example"
    >
      <option value="1">Сортировать по номеру: возрастание</option>
      <option value="2">Сортировать по номеру: убывание</option>
      <option value="3">Сортировать по названию: А-Я</option>
      <option value="4">Сортировать по названию: Я-А</option>
      <option value="5">Сортировать по дате: позже</option>
      <option value="6">Сортировать по дате: раньше</option>
    </Form.Control>
  );
});
