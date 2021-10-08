import React from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

export const LessonProjects = ({ number, title, homework }) => {
  return (
    <Container>
      <Card>
        <h3>
          Проекты урока №{number}: {title}
        </h3>
      </Card>

      <ListGroup variant="flush">
        {homework.map(({ taskNumber, taskDesc, taskLink }, index) => (
          <ListGroupItem key={index}>
            <h5>Задание №{taskNumber}</h5>
            <p>{taskDesc}</p>
            {taskLink && (
              <h6>
                Решение: <a href={taskLink}>{taskLink}</a>
              </h6>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};
