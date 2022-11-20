import "./App.css";
import Header from "./components/Header/Header";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/quiz/:quizId",
      element: <Quiz></Quiz>,
    },
  ]);
  return (
    <div className="App">
      <Header></Header>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
