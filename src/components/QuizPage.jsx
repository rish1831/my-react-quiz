import React, { useEffect, useState } from "react";
import QuizContext from "../containers/QuizContext";
import questionsData from "../questions.json";
import "../styles/QuizPage.css";
import CustomProgressBar from "./ProgressBar";
import Timer from "./Timer";

const QuizPage = () => {
    const {
        category: selectedCategory,
        setScore,
        score,
        setQuizFinished,
        questions = [],
        setQuestions,
        setCorrectAnswers,
        setUnansweredQuestions,
        setIncorrectAnswers,
        unansweredQuestions,
    } = React.useContext(QuizContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(10);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const totalQuestions = questions.length;

    useEffect(() => {
        const category = questionsData.categories.find(
            (cat) => cat.id === selectedCategory
        );

        if (category) {
            setQuestions(category.questions);
        }
    }, [selectedCategory]);

    const handleAnswer = () => {
        const correctAnswerKey = questions[currentQuestionIndex]?.correctAnswer;
        const correctAnswerIndex = questions[
            currentQuestionIndex
        ]?.options.findIndex((option) => option.startsWith(correctAnswerKey));

        if (
            selectedAnswer ===
            questions[currentQuestionIndex]?.options[correctAnswerIndex]
        ) {
            setScore(score + 1);
            setCorrectAnswers((correct) => correct + 1);
        } else setIncorrectAnswers((incorrect) => incorrect + 1);
        if (currentQuestionIndex < totalQuestions - 1)
            setCurrentQuestionIndex((index) => index + 1);
        else setQuizFinished(true);
        setSecondsLeft(10);
    };
    const skipAnswer = () => {
        setUnansweredQuestions(unansweredQuestions + 1);
        if (currentQuestionIndex < totalQuestions - 1)
            setCurrentQuestionIndex((index) => index + 1);
        else setQuizFinished(true);
        setSecondsLeft(10);
    };

    const progressPercentage = totalQuestions
        ? ((currentQuestionIndex + 1) / totalQuestions) * 100
        : 0;

    return (
        <div className="quiz-page">
            <div className="quiz-header">
                <div className="question-progress-and-timer">
                    <div className="question-progress">
                        <span>
                            {currentQuestionIndex + 1} / {totalQuestions}
                        </span>
                    </div>
                    <Timer
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        currentQuestionIndex={currentQuestionIndex}
                        secondsLeft={secondsLeft}
                        setSecondsLeft={setSecondsLeft}
                        setUnansweredQuestions={setUnansweredQuestions}
                        unansweredQuestions={unansweredQuestions}
                        totalQuestions={totalQuestions}
                        setQuizFinished={setQuizFinished}
                    />
                </div>
                <CustomProgressBar completed={progressPercentage} />
            </div>
            {questions.length > 0 && questions[currentQuestionIndex] && (
                <div className="question-section">
                    <h3>{questions[currentQuestionIndex].question}</h3>
                    <div className="options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <label
                                key={index}
                                className={`option-label 
                `}
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => setSelectedAnswer(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            )}
            <div className="quiz-footer">
                <button onClick={handleAnswer} className="next-button" disabled={!selectedAnswer}>
                    {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
                </button>
                <button onClick={skipAnswer} className="skip-button">
                    Skip this question
                </button>
            </div>
        </div>
    );
};

export default QuizPage;
