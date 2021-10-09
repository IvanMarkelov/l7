import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import "./App.css";
//import Tasktracker from "./components/Tasktracker";
import { CourseProjects } from "./components/CourseProjects";
import { Feedback } from "./components/Feedback";
import IssuesMainComponent from "./components/IssuesMainComponent";
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
      <Route
        path="/my-projects"
        render={() => <CourseProjects lessons={lessons} />}
      />
      <Route
        path="/issues"
        render={() => <IssuesMainComponent lessons={lessons} />}
      />
      <Route path="/feedback" component={Feedback} />

      {/* <PopupComponent>
        <AddIssueComponent />
      </PopupComponent> */}
    </div>
  );
}

export default App;
