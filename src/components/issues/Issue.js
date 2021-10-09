import React, { Component } from "react";
import axios from "axios";
import { Button, Table, Card, ToggleButton } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";

export default class Issue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: props.issue,
    };
  }

  render() {
    const {
      id,
      state,
      created_at,
      number,
      title,
      body,
      html_url,
      user,
      comments_url,
    } = this.state.issue;
    return (
      <Card className="issue" key={id}>
        <div>{state}</div>
        <div>{created_at}</div>
        <div>История {number}</div>
        <div>{title}</div>
        <button>
          {user.login}: {user.html_url}
        </button>
        <button href={comments_url}>{comments_url}</button>
        <button href={html_url}>{html_url}</button>
      </Card>
    );
  }
}
