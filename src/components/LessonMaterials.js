import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

export const LessonMaterials = ({ number, title, materials }) => {
  return (
    <Container>
      <h3>
        Материалы урока №{number}: {title}
      </h3>
      <h5>Видео:</h5>
      <ListGroup variant="flush">
        {materials.videos.map((title, index) => (
          <ListGroupItem key={index}>
            <a href={title}>{title}</a>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h5>Источники информации:</h5>
      <ListGroup>
        {materials.study.map((title, index) => (
          <ListGroupItem key={index}>
            <a href={title}>{title}</a>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h5>Ссылки:</h5>
      <ListGroup>
        {materials.links.map((title, index) => (
          <ListGroupItem key={index}>
            <a href={title}>{title}</a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
