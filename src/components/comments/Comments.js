import { observer } from "mobx-react";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ReplyComponent from "../issues/ReplyComponent";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
    this.props.comments_url &&
      this.props.store.getComments(this.props.comments_url);
  }

  render() {
    return (
      <div>
        {this.props.store.comments.map((c) => (
          <Comment key={c.id} commentId={c.id} commentBody={c.body} />
        ))}
        <ReplyComponent closeForm={() => {}} store={this.props.store} number={this.props.number} />
      </div>
    );
  }
}

const Comment = (props) => {
  return (
    <Card style={{ margin: "10px" }}>
      <h4>Comment {props.commentId}</h4>
      <p>{props.commentBody}</p>
    </Card>
  );
};

export default observer(Comments);
