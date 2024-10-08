import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import QuizContext from "./containers/QuizContext";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [username, setUserName] = useState("");
  const [category, setCategory] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);
  const [isQuizFinished, setQuizFinished] = React.useState();
  const [questions, setQuestions] = useState([]);

  const [score, setScore] = useState(0);

  const startQuiz = (userName, quizCategory) => {
    setUserName(userName);
    setCategory(quizCategory);
    setQuizStarted(true);
  };

  return (
    <div className="app">
      <QuizContext.Provider
        value={{
          correctAnswers,
          setCorrectAnswers,
          incorrectAnswers,
          unansweredQuestions,
          setUnansweredQuestions,
          setIncorrectAnswers,
          startQuiz,
          setQuizFinished,
          isQuizFinished,
          category,
          setScore,
          score,
          questions,
          setQuestions,
          username,
          quizStarted,
        }}
      >
        <Header />
        {!quizStarted && <HomePage startQuiz={startQuiz} />}
        {quizStarted && !isQuizFinished && <QuizPage />}
        {isQuizFinished && <ResultPage />}
      </QuizContext.Provider>
    </div>
  );
};

export default App;
