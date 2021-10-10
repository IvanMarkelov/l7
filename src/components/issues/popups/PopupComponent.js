import React, { Component, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Popup from "reactjs-popup";
import * as Icon from "react-bootstrap-icons";
import { set } from "mobx";

export default class PopupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  closePopup = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <>
        <Button onClick={() => this.setState({ open: true })}>
          {this.props.text} {this.props.icon}
        </Button>
        <Popup open={this.state.open} position="center center">
          {React.cloneElement(this.props.children, {closeForm: this.closePopup})}
          <Button variant="success"
            style={{ marginTop: "15px" }}
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
