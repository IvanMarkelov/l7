import React, { Component, useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  Table,
  Card,
  Row,
  ToggleButton,
  Form,
  Container,
  Badge,
  Col,
} from "react-bootstrap";
import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import { observer } from "mobx-react";
import PopupComponent from "./popups/PopupComponent";
import ReplyComponent from "./ReplyComponent";
import * as Icon from "react-bootstrap-icons";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../comments/Comments";
import "../../App.css";

const Issue = (props) => {
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
  } = props.issue;

  const [bodyInput, setBodyInput] = useState(body);
  const [editBody, setEditBody] = useState(false);

  const [showIssueCard, setShowIssueCard] = useState(false);
  const handleCloseIssueCard = () => {
    setShowIssueCard(false);
  };
  const handleShowIssueCard = () => setShowIssueCard(true);

  const [showIssueComments, setShowIssueComments] = useState(false);
  const handleCloseIssueComments = () => {
    setShowIssueComments(false);
  };
  const handleShowIssueComments = () => setShowIssueComments(true);

  const handleInputBody = (e) => setBodyInput(e.target.value);

  const handleBody = () => {
    setEditBody(true);
    //props.store.changeBody(id, bodyInput);
  };

  const handleChangeIssueState = () => {
    if (state === "open") {
      props.store.updateStateIssue(number, "closed");
    } else if (state === "closed") {
      props.store.updateStateIssue(number, "open");
    }
    props.store.getIssues();
  };

  const updateBody = () => {
    handleCloseIssueCard();
    props.store.updateBodyIssue(number, bodyInput);
  };

  const time = new Date(created_at);
  // return time.toLocaleTimeString();

  return (
    <>
      <Card
        style={{
          padding: 4,
          width: 250,
          maxWidth: "250px",
        }}
        className="issue"
        key={id}
      >
        <PopupComponent icon={<Icon.ChatLeftText />} text="Ответить">
          <ReplyComponent store={props.store} number={number} />
        </PopupComponent>

        <Button style={{ margin: "3px" }} variant="warning" onClick={handleChangeIssueState}>
          {state === "open" ? "Закрыть" : "Открыть"}
        </Button>
        <div onClick={handleShowIssueCard}>
          <div>
            {state === "open" ? (
              <div>
                <Icon.DoorOpen /> Open
              </div>
            ) : (
              <div>
                <Icon.Lock /> Closed
              </div>
            )}
          </div>
          <div>
            {time.toLocaleDateString()} {time.toLocaleTimeString()}
          </div>
          <div>
            Обращение №{number} <Icon.Pencil />
          </div>
          <h3>{title}</h3>
        </div>
        <div>
          <Button
            style={{ margin: "3px" }}
            variant="outline-primary"
            href={user.html_url}
          >
            <Icon.Person />
            {user.login}
          </Button>
          <Button
            style={{ margin: "3px" }}
            variant="outline-primary"
            onClick={handleShowIssueComments}
            //onClick={() => this.props.store.getComments(comments_url)}
          >
            <Icon.CardText />
          </Button>
          <Button
            style={{ margin: "3px" }}
            variant="outline-primary"
            href={html_url}
          >
            <Icon.Github />
          </Button>
        </div>
      </Card>

      <Modal show={showIssueCard} onHide={handleCloseIssueCard}>
        <Modal.Header>
          <Modal.Title>
            Обращение №{number}: {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Создано: {time.toLocaleDateString()} {time.toLocaleTimeString()}.
            Статус: {state}
          </h6>
          {editBody ? (
            <>
              <p>{body}</p>
              <Button onClick={handleBody}>Редактировать</Button>
            </>
          ) : (
            <Form.Control
              as="textarea"
              value={bodyInput}
              rows={3}
              onChange={handleInputBody}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateBody}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCloseIssueCard}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showIssueComments} onHide={handleCloseIssueCard}>
        <Modal.Header>
          <Modal.Title>
            Обращение №{number}: {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <Card>{body}</Card>
          <Comments
            store={props.store}
            number={number}
            comments_url={comments_url}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseIssueComments}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleCloseIssueComments}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default observer(Issue);
