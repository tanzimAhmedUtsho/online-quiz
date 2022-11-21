import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistic = () => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    getQuizList();
  }, []);

  const getQuizList = async () => {
    const res = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );
    setQuizList(res.data.data);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = quizList.map((quiz) => quiz.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: quizList.map((quiz) => quiz.total),
        backgroundColor: "aquamarine",
      },
    ],
  };
  return (
    <div className="mx-auto">
      <h5>Bar Chart</h5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "800px",
            width: "800px",
          }}
        >
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
