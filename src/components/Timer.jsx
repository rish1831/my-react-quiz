import React, { useEffect } from "react";

const Timer = (props) => {
    const {
        setCurrentQuestionIndex,
        currentQuestionIndex,
        secondsLeft,
        setSecondsLeft,
        setUnansweredQuestions,
        totalQuestions,
        setQuizFinished,
    } = props;

    useEffect(() => {
        if (secondsLeft === 0) {
            handleTimeUp();
        } else {
            const timeout = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [secondsLeft, currentQuestionIndex]);

    const handleTimeUp = () => {
        setUnansweredQuestions((prevUnanswered) => prevUnanswered + 1);

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSecondsLeft(10);
        } else {
            setQuizFinished(true);
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
    };

    return <div>{formatTime(secondsLeft)}</div>;
};

export default Timer;
