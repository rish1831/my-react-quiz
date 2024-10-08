import React from "react";
import QuizContext from "../containers/QuizContext";
import "../styles/ResultPage.css";

const ResultPage = () => {
    const {
        score,
        questions,
        correctAnswers,
        incorrectAnswers,
        unansweredQuestions,
    } = React.useContext(QuizContext);
    const totalQuestions = questions.length;
    const scorePercentage = (score / totalQuestions) * 100;

    const isSuccessful = scorePercentage >= 60;
    const getSuccessMessage = () => {
        if (scorePercentage > 80) {
            return "Congratulations!";
        } else if (scorePercentage >= 60) {
            return "Well done!";
        } else {
            return "Keep Practicing!";
        }
    };
    const successMessage = getSuccessMessage();

    return (
        <div className="quiz-result-container">
            <div className={`result-icon ${isSuccessful ? "success" : "failure"}`}>
                <div className="icon">{isSuccessful ? "✔️" : "😕"}</div>
            </div>
            <h1>{successMessage}</h1>
            <p>
                You successfully completed the Quiz{" "}
                {isSuccessful ? "and hold" : "but you need to"}
            </p>
            <h2
                className="score-percentage"
                style={{ color: isSuccessful ? "#28a745" : "#ffcc00" }}
            >
                {scorePercentage}%
            </h2>
            {isSuccessful ? (
                scorePercentage > 80 ? (
                    <h3>Great job!</h3>
                ) : (
                    <h3>Good job!</h3>
                )
            ) : (
                <h3>Keep Practicing!</h3>
            )}
            <div className="question-summary">
                <p>Out of {totalQuestions} questions</p>
                <div className="summary-details">
                    <span className="correct">{correctAnswers} Correct</span>
                    <span className="incorrect">{incorrectAnswers} Incorrect</span>
                    <span className="not-answered">
                        {unansweredQuestions} Not answered
                    </span>
                </div>
            </div>
            <button
                className="retake-button"
                onClick={() => window.location.reload()}
            >
                Retake Quiz
            </button>
        </div>
    );
};

export default ResultPage;
