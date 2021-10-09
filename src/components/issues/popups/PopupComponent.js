import React, { Component, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Popup from "reactjs-popup";

export default class PopupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <>
        <Button onClick={() => this.setState({ open: true })}>{this.props.text}</Button>
        <Popup open={this.state.open} position="center center">
          {this.props.children}
          <Button style={{marginTop: "15px"}}
            variant="danger"
            onClick={() => this.setState({ open: false })}
          >
            Close
          </Button>
        </Popup>
      </>
    );
  }
}
