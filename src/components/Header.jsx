import React from "react";
import QuizContext from "../containers/QuizContext";
import "../styles/Header.css";

const Header = () => {
    const { quizStarted, isQuizFinished, username } =
        React.useContext(QuizContext);
    return (
        <div className="header">
            <div className="logo-container">
                <h1 className="logo">
                    QUIZ<span>Mania</span>
                </h1>
                {quizStarted && !isQuizFinished ? <button className="exit-button" onClick={() => window.location.reload()}>Exit Quiz</button> : null}
                {isQuizFinished ? <h1 className="username-class">{username}</h1> : null}
            </div>
        </div>
    );
};

export default Header;
