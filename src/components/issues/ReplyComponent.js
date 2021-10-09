import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";

export default class ReplyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyText: "",
      willCloseIssue: false,
    };
  }

  handleAddComment = () => {
    console.log("add comment");
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Отправить комментарий:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Check type="checkbox" label="Закрыть обращение" />
        <Button onClick={this.handleAddComment}>Добавить комментарий</Button>
      </Form>
    );
  }
}
