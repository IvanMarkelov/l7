import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import { CourseMaterials } from "./components/CourseMaterials";
import { CourseProjects } from "./components/CourseProjects";
import { Feedback } from "./components/Feedback";
import lessons from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand>
            <Link to="/">Домой</Link>
          </NavbarBrand>
          <Nav>
            <NavLink>
              <Link to="/my-projects">Мои проекты на курсе</Link>
            </NavLink>
            <NavLink>
              <Link to="/materials">Материалы курса</Link>
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
        path="/materials"
        render={() => <CourseMaterials lessons={lessons} />}
      />
      <Route path="/feedback" component={Feedback} />
    </div>
  );
}

export default App;
