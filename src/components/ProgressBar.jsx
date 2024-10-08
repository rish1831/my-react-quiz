import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import "../styles/ProgressBar.css";

const CustomProgressBar = ({ completed }) => {
    return (
        <div className="progress-bar-wrapper">
            <ProgressBar
                completed={completed}
                height="10px"
                bgColor="#b81f56"
                baseBgColor="#f1f1f1"
                labelSize="0"
                width="100%"
            />
        </div>
    );
};

export default CustomProgressBar;
