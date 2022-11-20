import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
      <h2>Quiz: {quizId} </h2>
    </div>
  );
};

export default Quiz;
