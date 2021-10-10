import React, { Component } from "react";
import axios from "axios";
import { Button, Table, Card, ToggleButton, Form } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import ReplyComponent from "./ReplyComponent";
import { observer } from "mobx-react";

class AddIssueComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      comment: "",
      blockAdding: true,
    };
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
    this.setState({ blockAdding: e.target.value === "" });
  };
  handleComment = (e) => this.setState({ comment: e.target.value });

  handleAddingIssue = () => {
    this.props.store.addIssue({
      title: this.state.title,
      comment: this.state.comment,
    });
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Название issue</Form.Label>
          <Form.Control onChange={this.handleTitle} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Оставить комментарий</Form.Label>
          <Form.Control onChange={this.handleComment} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
          <Button variant="success"
            disabled={this.state.blockAdding}
            onClick={() => {
              this.handleAddingIssue();
              this.props.closeForm();
            }}
          >
            Add Issue
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default observer(AddIssueComponent);
