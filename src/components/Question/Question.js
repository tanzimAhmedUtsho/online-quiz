import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Question = ({ question }) => {
  console.log(question);
  return (
    <Container className="mb-5">
      <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
      <Row xs={1} md={2} className="g-4">
        {question?.options.map((topic) => (
          <Col key={topic}>
            <Card className="p-3 shadow-lg border-5">
              <Card.Body>
                <Card.Text>{topic}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Question;
