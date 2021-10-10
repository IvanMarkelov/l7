import {
  action,
  computed,
  observable,
  makeObservable,
  makeAutoObservable,
} from "mobx";
import axios from "axios";

const token = "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";
const authHeader = "token " + token;

export default class IssuesStore {
  issues = [];
  comments = [];

  getIssues = async () => {
    let res = await axios.get(
      "https://api.github.com/repos/IvanMarkelov/l7/issues?state=all"
    );
    console.log("getIssues", res.data);
    this.setIssues(res.data);
  };

  setIssues = (data) => {
    this.issues = data;
  };

  getComments = async (commentUrl) => {
    //const result = await request;
    console.log("commentUrl", commentUrl);
    let res = await axios.get(commentUrl);
    this.setComments(res.data);
  };

  setComments = (data) => {
    this.comments = data;
  };

  constructor() {
    makeAutoObservable(this, {
    });
  }

  addIssue = async (issue) => {
    const response = await axios.post(
      "https://api.github.com/repos/IvanMarkelov/l7/issues",
      { title: issue.title, body: issue.comment },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
    await this.getIssues();
  };

  updateBodyIssue = async (number, body) => {
    const response = await axios.patch(
      `https://api.github.com/repos/IvanMarkelov/l7/issues/${number}`,
      { body: body },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  };

  updateStateIssue = async (number, state) => {
    const response = await axios.patch(
      `https://api.github.com/repos/IvanMarkelov/l7/issues/${number}`,
      { state: state },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  };

  lockIssue = async (number) => {
    const response = await axios.put(
      `https://api.github.com/repos/IvanMarkelov/l7/issues/${number}/lock`,
      { lock_reason: resolved },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  };

  unlockIssue = async (number) => {
    const response = await axios.delete(
      `https://api.github.com/repos/IvanMarkelov/l7/issues/${number}/lock`,
      { lock_reason: resolved },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  };

  createComment = async (number, body) => {
    const response = await axios.post(
      `https://api.github.com/repos/IvanMarkelov/l7/issues/${number}/comments`,
      { body: body },
      {
        headers: {
          Authorization: authHeader,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response);
  };

  changeBody = (id, body) => {
    const updatedIssues = this.issues.map((i) => {
      i.id === id;
      i.body = body;
    });
    this.issues = updatedIssues;
  };

  sortByTitle = () => {
    this.issues = this.issues.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
  };

  reverseSortByTitle = () => {
    this.issues = this.issues.reverse((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
  };

  sortByNumber = () => {
    this.issues = this.issues.sort((a, b) =>
      a.number > b.number ? 1 : b.number > a.number ? -1 : 0
    );
  };

  reverseSortByNumber = () => {
    this.issues = this.issues.reverse((a, b) =>
      a.number > b.number ? 1 : b.number > a.number ? -1 : 0
    );
  };

  sortByCreated = () => {
    this.issues = this.issues.reverse((a, b) =>
      a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0
    );
  };

  reverseSortByCreated = () => {
    this.issues = this.issues.sort((a, b) =>
      a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0
    );
  };
}
