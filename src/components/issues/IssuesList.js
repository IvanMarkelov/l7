import React, { Component } from "react";
import axios from "axios";
import { Button, Table, Card, ToggleButton } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import ReplyComponent from "./ReplyComponent";
import Issue from "./Issue";
import AddIssueComponent from "./AddIssueComponent";
import PopupComponent from "./popups/PopupComponent";

const token = "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";

function getAuthorizationHeader(login, token) {
  const btoaRes = btoa(login + ":" + token);
  `Authorization: 'Basic' + ' ' + ${btoaRes}`;
}

export default class IssuesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
    };
    // const octokit = new Octokit({auth: })
    const authHeader = getAuthorizationHeader("IvanMarkelov", token);
  }

  componentDidMount() {
    this.getIssues();
  }

  getIssues = async () => {
    const result = await request;
    let res = await axios.get(
      "https://api.github.com/repos/IvanMarkelov/l7/issues"
    );
    axios.head;
    console.log("getIssues", res);
    console.log("getIssues", res.data);
    this.setState({ issues: res.data });
  };

  handleAddIssue = (title, comment) => {
    console.log("addingIssue");
    const newIssue = { id: Date.now(), title, comment, created_at: Date.now() };
    console.log("newIssue", title, comment);
    // this.setState({
    //   ...this.issues,
    //   issues: newIssue,
    // });
  };

  addIssue = (issue) => {
    console.log(issue);
  };

  closeIssue = (id) => {
    const issueToClose = this.state.issues.find((el) => el.id === id);
    console.log(id, issueToClose.title);
  };

  render() {
    console.log(this.state.issues);
    return (
      <>
        <PopupComponent text="Ответить">
          <ReplyComponent />
        </PopupComponent>
        <AddIssueComponent addIssue={this.handleAddIssue} />
        <div className="issues">
          <Issue issue={testIssue} />
          {this.state.issues.map((issue) => (
            <Issue issue={issue} />
          ))}
        </div>
      </>
    );
  }
}

const testIssue = {
  id: "test",
  state: "Статус: open",
  created_at: "Время создания",
  number: "Номер",
  title: "Название",
  body: "Тело",
  html_url: "переход на сайт github стекущим обращением",
  user: {
    login: "Login",
    html_url: "ссылка на профиль пользователя",
  },
  comments_url:
    "кнопка с иконками открыть в новом (редактировать) - переход настраницу с комментариями по обращению",
};
