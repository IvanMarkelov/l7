import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "./App.css";
import { CourseProjects } from "./components/CourseProjects";
import { Feedback } from "./components/Feedback";
import IssuesMainComponent from "./components/IssuesMainComponent";
import Tasktracker from "./components/issues/Tasktracker";
import lessons from "./data";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="dark">
        <Container>
          <NavbarBrand>
            <Link to="/">Домой</Link>
          </NavbarBrand>
          <Nav>
            <NavLink>
              <Link to="/my-projects">Мои проекты на курсе</Link>
            </NavLink>
            <NavLink>
              <Link to="/issues">GitHub Issues</Link>
            </NavLink>
            <NavLink>
              <Link to="/feedback">Мой отзыв</Link>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route
          path="/my-projects"
          render={() => <CourseProjects lessons={lessons} />}
        />
        <Route
          path="/issues"
          render={() => <IssuesMainComponent lessons={lessons} />}
        />
        <Route path="/feedback" component={Feedback} />
        <Route exact path="/" />
        <Route component={NotFound} />
      </Switch>

      {/* <PopupComponent>
        <AddIssueComponent />
      </PopupComponent> */}
    </div>
  );
}

const NotFound = () => {
  return <h1>На этой странице ничего нет... Пока что.</h1>;
};

export default App;
