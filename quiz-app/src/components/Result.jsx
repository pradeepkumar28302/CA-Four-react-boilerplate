import React from 'react';
import './Result.css';

const Result = ({ score, total, resetQuiz }) => {
  const percentage = (score / total) * 100;
  return (
    <div className="result">
      <h2>Quiz Completed</h2>
      <p>Your score is {percentage}%</p>
      <button onClick={resetQuiz}>Reset Quiz</button>
    </div>
  );
};

export default Result;
