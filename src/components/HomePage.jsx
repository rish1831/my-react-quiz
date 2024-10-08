import React, { useState } from "react";
import "../styles/HomePage.css";
import Modal from "./Modal";

const HomePage = ({ startQuiz }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleStart = () => {
        if (name && category) {
            startQuiz(name, category);
        } else {
            alert("Please enter your name and select a category.");
        }
    };

    return (
        <div className="home-page">
            <h1>
                Welcome to{" "}
                <span className="logo">
                    QUIZ<span>Mania</span>
                </span>
            </h1>

            <div className="rules-section">
                <div>Please read all the rules about this quiz before you start.</div>
                <button className="quiz-rules-link" onClick={() => setShowModal(true)}>
                    Quiz rules
                </button>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <h2 className="modal-title">Quiz Rules</h2>
                <div className="modal-body">
                    <section className="rule-section">
                        <h3 className="rule-title">10-Second Timer</h3>
                        <ul>
                            <li>Each question comes with a 10-second timer.</li>
                            <li>
                                If you don’t answer within the time limit, the app will
                                automatically move to the next question.
                            </li>
                        </ul>
                    </section>
                    <section className="rule-section">
                        <h3 className="rule-title">Manual Navigation</h3>
                        <ul>
                            <li>
                                You can navigate to the next question manually before the timer
                                expires.
                            </li>
                            <li>
                                Use the "Next" button to move ahead if you’re ready before the
                                timer runs out.
                            </li>
                        </ul>
                    </section>
                    <section className="rule-section">
                        <h3 className="rule-title">Final Score and Performance Message</h3>
                        <ul>
                            <li>
                                After all questions are answered, your final score will be
                                displayed.
                            </li>
                            <li>
                                Based on your performance, you will receive a personalized
                                message:
                                <ul>
                                    <li>
                                        <strong>Great job!</strong> If you score above 80%.
                                    </li>
                                    <li>
                                        <strong>Well done!</strong> If you score between 60% and
                                        80%.
                                    </li>
                                    <li>
                                        <strong>Keep practicing!</strong> If you score below 60%.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </Modal>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="category-section">
                <h3>Please select a topic to continue</h3>
                <div className="categories">
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="js_basics"
                            onChange={() => setCategory("js_basics")}
                        />
                        JavaScript Basics
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="react_basics"
                            onChange={() => setCategory("react_basics")}
                        />
                        React Basics
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="angular_basics"
                            onChange={() => setCategory("angular_basics")}
                        />
                        Angular Basics
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="category"
                            value="flutter_basics"
                            onChange={() => setCategory("flutter_basics")}
                        />
                        Flutter
                    </label>
                </div>
                <button className="start-button" onClick={handleStart}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default HomePage;
