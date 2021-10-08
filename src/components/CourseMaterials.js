import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { LessonMaterials } from "./LessonMaterials";

export const CourseMaterials = ({ lessons }) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Container>
        <h1>Материалы</h1>
        <ListGroup>
          {lessons.map((lesson) => (
            <ListGroupItem key={lesson.id}>
              <Link to={`${url}/lesson${lesson.id}-materials`}>
                Урок №{lesson.id}: {lesson.title}
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
        <Switch>
          {lessons.map((lesson) => (
            <Route
              key={lesson.id}
              path={`${path}/lesson${lesson.id}-materials`}
            >
              <LessonMaterials
                number={lesson.id}
                title={lesson.title}
                materials={lesson.materials}
              />
            </Route>
          ))}
        </Switch>
      </Container>
    </>
  );
};
