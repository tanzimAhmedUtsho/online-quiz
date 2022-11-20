import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import QuizTopic from "./components/QuizTopic/QuizTopic";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <QuizTopic></QuizTopic>
    </div>
  );
}

export default App;
