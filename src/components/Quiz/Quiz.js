import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const [singleQuiz, setSingleQuiz] = useState({});
  const { quizId } = useParams();
  React.useEffect(() => {
    getQuizQuestion();
  }, [quizId]);

  const getQuizQuestion = async () => {
    const res = await axios.get(
      `   https://openapi.programming-hero.com/api/quiz/${quizId}`
    );
    console.log(res.data.data);
    setSingleQuiz(res.data.data);
  };
  return (
    <div>
      <h2>Quiz: {singleQuiz.name} </h2>
      {singleQuiz?.questions?.map((question) => (
        <Question key={question.id} question={question}></Question>
      ))}
    </div>
  );
};

export default Quiz;
