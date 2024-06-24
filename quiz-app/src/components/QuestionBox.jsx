import React, { useState } from 'react';
import './QuestionBox.css';

const QuestionBox = ({ question, questionNumber, totalQuestions, handleAnswer }) => {
  const [highlighted, setHighlighted] = useState(false);

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div className="question-box">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <p className={highlighted ? 'highlighted' : ''}>{question.text}</p>
      <div>
        {question.options.map((option) => (
          <button key={option.id} onClick={() => handleAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
      <button onClick={toggleHighlight}>
        {highlighted ? 'Remove Highlight' : 'Highlight'}
      </button>
    </div>
  );
};

export default QuestionBox;
