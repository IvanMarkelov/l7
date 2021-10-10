import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import { observer } from "mobx-react";

class ReplyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyText: "",
      willCloseIssue: false,
    };
  }

  handleAddComment = () => {
    console.log("add comment");
    console.log(this.props.number);
    console.log(this.state.replyText);
    this.props.store.createComment(this.props.number, this.state.replyText);
    if (this.state.willCloseIssue) {
      this.props.store.updateStateIssue(this.props.number, "closed");
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Отправить комментарий:</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ replyText: e.target.value })}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          defaultChecked={false}
          onChange={() => {
            this.setState({ willCloseIssue: !this.state.willCloseIssue });
          }}
          label="Закрыть обращение"
        />
        <Button
          style={{ margin: "3px" }}
          onClick={() => {
            this.handleAddComment();
            this.props.closeForm();
          }}
        >
          Добавить комментарий
        </Button>
      </Form>
    );
  }
}

export default observer(ReplyComponent);
