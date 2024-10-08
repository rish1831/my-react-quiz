import React from 'react';
import '../styles/Modal.css';

const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <h2 className="modal-title">Quiz Rules</h2>
                <div className="modal-body">
                    <section className="rule-section">
                        <h3 className="rule-title">10-Second Timer</h3>
                        <ul>
                            <li>Each question comes with a 10-second timer.</li>
                            <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
                        </ul>
                    </section>
                    <section className="rule-section">
                        <h3 className="rule-title">Manual Navigation</h3>
                        <ul>
                            <li>You can navigate to the next question manually before the timer expires.</li>
                            <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
                        </ul>
                    </section>
                    <section className="rule-section">
                        <h3 className="rule-title">Final Score and Performance Message</h3>
                        <ul>
                            <li>After all questions are answered, your final score will be displayed.</li>
                            <li>Based on your performance, you will receive a personalized message:
                                <ul>
                                    <li><strong>Great job!</strong> If you score above 80%.</li>
                                    <li><strong>Well done!</strong> If you score between 60% and 80%.</li>
                                    <li><strong>Keep practicing!</strong> If you score below 60%.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Modal;