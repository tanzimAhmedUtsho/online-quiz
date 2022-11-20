import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Main from "./components/Home/Main";
import Statistic from "./components/Statistic/Statistic";
import Blog from "./components/Blog/Blog";
import QuizTopic from "./components/QuizTopic/QuizTopic";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          element: <Statistic></Statistic>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
        {
          path: "/topic",
          element: <QuizTopic></QuizTopic>,
        },
        {
          path: "/quiz/:quizId",
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
