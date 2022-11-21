import { Eye } from "phosphor-react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Question = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const notify = () =>
    toast.info(`correct answer is ${question.correctAnswer}`);
  const wrongAnswer = () => toast.error("wrong answer");
  const rightAnswer = () => toast.success("correct answer");
  const handleAnswer = (data, id) => {
    setSelectedAnswer(data);
    if (question.correctAnswer === data) {
      setIsCorrect("correct");
      rightAnswer();
    } else {
      setIsCorrect("wrong");
      wrongAnswer();
    }
  };

  return (
    <Container className="mb-5">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-2">
          <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
        </div>
        <Button onClick={notify} variant="light" className="p-0">
          <Eye size={32} />
        </Button>
      </div>
      <Row xs={1} md={2} className="g-4">
        {question?.options.map((option) => (
          <Col key={option}>
            <Card
              onClick={() => {
                handleAnswer(option, question.id);
              }}
              className="p-3 shadow-lg border-5"
              style={{
                height: "80px",
                backgroundColor:
                  selectedAnswer === option && isCorrect === "correct"
                    ? "green"
                    : selectedAnswer === option && isCorrect === "wrong"
                    ? "red"
                    : "transparent",
                color: selectedAnswer === option ? "white" : "black",
                cursor: "pointer",
              }}
            >
              <Card.Body>
                <Card.Text>{option}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
    </Container>
  );
};

export default Question;
