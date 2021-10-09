import React, { Component } from "react";
import axios from "axios";
import { Button, Table, Card, ToggleButton, Form } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import ReplyComponent from "./ReplyComponent";

export default class AddIssueComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      comment: "",
    };
  }

  handleTitle = (e) => this.setState({ title: e.target.value });
  handleComment = (e) => this.setState({ comment: e.target.value });

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название issue</Form.Label>
          <Form.Control
            onChange={this.handleTitle}
            type="text"
            placeholder="Issue title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Оставить комментарий</Form.Label>
          <Form.Control
            onChange={this.handleComment}
            as="textarea"
            placeholder="Issue Comment"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Button
            onClick={() => {
              this.props.addIssue(this.state.title, this.state.comment);
            }}
          >
            Add Issue
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
