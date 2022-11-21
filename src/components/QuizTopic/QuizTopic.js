import axios from "axios";

import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizTopic = () => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    getTopicList();
  }, []);

  const getTopicList = async () => {
    const res = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );

    setTopicList(res.data.data);
  };
  return (
    <Container>
      <h1>Quiz topic</h1>
      <Row xs={1} md={2} className="g-4">
        {topicList.map((topic) => (
          <Col key={topic.id}>
            <Card className="p-3 shadow-lg border-5">
              <Card.Img
                style={{
                  height: "250px",
                  width: "100%",
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "10px",
                }}
                variant="top"
                src={topic.logo}
              />
              <Card.Body>
                <Card.Title>{topic.name}</Card.Title>
                <Card.Text>
                  Total Question:
                  {topic.total}
                </Card.Text>
                <Link to={`/quiz/${topic.id}`}>
                  <Button className="w-100">Start Quiz</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default QuizTopic;
