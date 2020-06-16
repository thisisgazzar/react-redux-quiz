import React from "react";
import { Link } from "react-router-dom";

const Result = ({ finalResult, initQuiz }) => {
    return (
      <div>
        <h2> Your Score is: {finalResult}</h2>
        <Link to="/" onClick={initQuiz}>
          Redo
        </Link>
      </div>
    );
}

export default Result;