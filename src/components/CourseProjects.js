import React from "react";
import { LessonProjects } from "./LessonProjects";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

export const CourseProjects = ({ lessons }) => {
  let { path, url } = useRouteMatch();
  return (
    <Container>
      <h1>Мои проекты</h1>
      <ListGroup>
        {lessons.map((lesson) => (
          <ListGroupItem key={lesson.id}>
            <Link to={`${url}/lesson${lesson.id}-projects`}>
              Урок №{lesson.id}: {lesson.title}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
      <Switch>
        {lessons.map((lesson) => (
          <Route key={lesson.id} path={`${path}/lesson${lesson.id}-projects`}>
            <LessonProjects
              number={lesson.id}
              title={lesson.title}
              homework={lesson.homework}
            />
          </Route>
        ))}
      </Switch>
    </Container>
  );
};
