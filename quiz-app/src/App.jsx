import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {showResult ? (
        <Result score={score} total={questions.length} resetQuiz={resetQuiz} />
      ) : (
        <QuestionBox
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
